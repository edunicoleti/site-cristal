import { MapPin, Building, ChevronDown, Globe, Navigation, Droplets, Calendar, Map } from "lucide-react";
import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════ */

const GEO_URL =
  "https://raw.githubusercontent.com/codeforgermany/click_that_hood/master/public/data/brazil-states.geojson";

const COVERAGE_STATES = new Set([
  "RS", "PR", "SP", "SC", "TO", "BA", "CE", "PA", "MA",
]);

const STATE_NAMES: Record<string, string> = {
  AC: "Acre", AL: "Alagoas", AP: "Amapá", AM: "Amazonas",
  BA: "Bahia", CE: "Ceará", DF: "Distrito Federal", ES: "Espírito Santo",
  GO: "Goiás", MA: "Maranhão", MT: "Mato Grosso", MS: "Mato Grosso do Sul",
  MG: "Minas Gerais", PA: "Pará", PB: "Paraíba", PR: "Paraná",
  PE: "Pernambuco", PI: "Piauí", RJ: "Rio de Janeiro", RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul", RO: "Rondônia", RR: "Roraima", SC: "Santa Catarina",
  SP: "São Paulo", SE: "Sergipe", TO: "Tocantins",
};

const NAME_TO_SIGLA: Record<string, string> = Object.fromEntries(
  Object.entries(STATE_NAMES).map(([k, v]) => [v, k])
);
const NAME_TO_SIGLA_EN: Record<string, string> = {
  Acre: "AC", Alagoas: "AL", Amapa: "AP", Amazonas: "AM",
  Bahia: "BA", Ceara: "CE", "Distrito Federal": "DF", "Espirito Santo": "ES",
  Goias: "GO", Maranhao: "MA", "Mato Grosso": "MT", "Mato Grosso do Sul": "MS",
  "Minas Gerais": "MG", Para: "PA", Paraiba: "PB", Parana: "PR",
  Pernambuco: "PE", Piaui: "PI", "Rio de Janeiro": "RJ",
  "Rio Grande do Norte": "RN", "Rio Grande do Sul": "RS", Rondonia: "RO",
  Roraima: "RR", "Santa Catarina": "SC", "Sao Paulo": "SP",
  Sergipe: "SE", Tocantins: "TO",
};

const COVERAGE_CENTROIDS: Record<string, [number, number]> = {
  RS: [-53.2, -30.1],
  PR: [-51.6, -24.7],
  SP: [-48.5, -22.2],
  SC: [-50.4, -27.6],
  TO: [-48.2, -10.2],
  BA: [-41.5, -12.6],
  CE: [-39.4, -5.4],
  PA: [-52.5, -3.9],
  MA: [-44.5, -5.5],
};

interface UnitMarker {
  label: string;
  city: string;
  state: string;
  type: "headquarters" | "branch";
  coordinates: [number, number];
}

const UNIT_MARKERS: UnitMarker[] = [
  {
    label: "Matriz",
    city: "Chapecó",
    state: "SC",
    type: "headquarters",
    coordinates: [-52.6168, -27.0964],
  },
  {
    label: "Filial",
    city: "Balsas",
    state: "MA",
    type: "branch",
    coordinates: [-46.0356, -7.5329],
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

function getSigla(properties: Record<string, unknown>): string {
  for (const key of ["sigla", "id", "UF", "SIGLA", "abbrev", "postal"]) {
    const val = properties?.[key];
    if (typeof val === "string" && val.length === 2) return val.toUpperCase();
  }
  for (const key of ["nome", "name", "NAME", "NOME", "NM_ESTADO"]) {
    const name = String(properties?.[key] ?? "");
    if (NAME_TO_SIGLA[name]) return NAME_TO_SIGLA[name];
    if (NAME_TO_SIGLA_EN[name]) return NAME_TO_SIGLA_EN[name];
  }
  return "";
}

const BRAND_BLUE = "#137fec";
const BRAND_ORANGE = "#f97316";

function getStateFill(sigla: string, hovered: boolean, selected: boolean): string {
  if (sigla === "SC" || sigla === "MA") {
    if (selected) return "#c2410c";
    return hovered ? "#fb923c" : BRAND_ORANGE;
  }
  if (COVERAGE_STATES.has(sigla)) {
    if (selected) return "#60a5fa";
    return hovered ? "#93c5fd" : "#bfdbfe";
  }
  return hovered ? "#d5dbe3" : "#e8ecf1";
}

function getStateStroke(sigla: string): string {
  if (sigla === "SC" || sigla === "MA") return "#ffffff";
  return COVERAGE_STATES.has(sigla) ? "#ffffff" : "#d1d5db";
}

function getStateStrokeWidth(sigla: string): number {
  if (sigla === "SC" || sigla === "MA") return 2;
  if (COVERAGE_STATES.has(sigla)) return 1;
  return 0.5;
}

function getTooltipData(sigla: string) {
  if (sigla === "SC")
    return { title: "Santa Catarina", sub: "Sede Principal — Chapecó", color: BRAND_ORANGE, badge: "MATRIZ", icon: "hq" as const };
  if (sigla === "MA")
    return { title: "Maranhão", sub: "Filial — Balsas", color: BRAND_ORANGE, badge: "FILIAL", icon: "hq" as const };
  return { title: STATE_NAMES[sigla] || sigla, sub: "Estado atendido pela Cristal Poços", color: "#3b82f6", badge: "ATENDIDO", icon: "coverage" as const };
}

/* ═══════════════════════════════════════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════════════════════════════════════ */

function MapSkeleton({ isMobile }: { isMobile: boolean }) {
  return (
    <div
      className="w-full rounded-[20px] md:rounded-[24px] overflow-hidden"
      style={{
        aspectRatio: isMobile ? "3 / 4" : "16 / 9",
        background: "linear-gradient(135deg, #f0f7ff 0%, #e0efff 50%, #f0f7ff 100%)",
      }}
    >
      <div className="h-full flex flex-col items-center justify-center gap-[20px]">
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-[48px] h-[48px] rounded-full border-[3px] border-[#137fec]/15 border-t-[#137fec]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Globe size={18} className="text-[#137fec]/40" />
          </div>
        </div>
        <div className="text-center">
          <p className="font-['Inter',sans-serif] text-[14px] text-[#374151]" style={{ fontWeight: 600 }}>
            Carregando mapa interativo...
          </p>
          <p className="font-['Inter',sans-serif] text-[12px] text-[#9ca3af] mt-[4px]">
            Presença em 9 estados brasileiros
          </p>
        </div>
        <div className="flex gap-[6px]">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-[6px] h-[6px] rounded-full bg-[#137fec]"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MapError({ onRetry }: { onRetry: () => void }) {
  return (
    <div
      className="w-full rounded-[20px] md:rounded-[24px] overflow-hidden border-2 border-dashed border-[#137fec]/20"
      style={{
        aspectRatio: "16 / 9",
        background: "linear-gradient(135deg, #fef2f2 0%, #fff7ed 100%)",
      }}
    >
      <div className="h-full flex flex-col items-center justify-center gap-[16px] px-[24px]">
        <div className="w-[56px] h-[56px] rounded-full bg-[#fef2f2] flex items-center justify-center">
          <MapPin size={24} className="text-[#ef4444]" />
        </div>
        <div className="text-center">
          <p className="font-['Inter',sans-serif] text-[15px] text-[#111418]" style={{ fontWeight: 700 }}>
            Não foi possível carregar o mapa
          </p>
          <p className="font-['Inter',sans-serif] text-[13px] text-[#617589] mt-[4px]">
            Verifique sua conexão e tente novamente
          </p>
        </div>
        <button
          onClick={onRetry}
          className="bg-[#137fec] text-white rounded-[10px] px-[20px] py-[10px] font-['Inter',sans-serif] text-[13px] transition-all hover:bg-[#1170d4] active:scale-[0.97]"
          style={{ fontWeight: 600 }}
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}

function StateTooltip({ sigla, x, y, containerW }: { sigla: string; x: number; y: number; containerW: number }) {
  const info = getTooltipData(sigla);
  const flipX = x > containerW - 240;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.14 }}
      className="absolute z-50 pointer-events-none"
      style={{
        left: flipX ? x - 12 : x + 18,
        top: y - 66,
        transform: flipX ? "translateX(-100%)" : "none",
      }}
    >
      <div
        className="bg-white rounded-[14px] shadow-[0_12px_40px_rgba(0,0,0,0.14)] px-[16px] py-[12px] min-w-[190px]"
        style={{ border: `2px solid ${info.color}20` }}
      >
        <div className="flex items-center gap-[8px] mb-[4px]">
          <div
            className="w-[24px] h-[24px] rounded-[7px] flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${info.color}15` }}
          >
            {info.icon === "hq" ? (
              <Building size={12} style={{ color: info.color }} />
            ) : (
              <MapPin size={12} style={{ color: info.color }} />
            )}
          </div>
          <div>
            <span className="font-['Inter',sans-serif] text-[13px] text-[#111418] block leading-tight" style={{ fontWeight: 700 }}>
              {info.title}
            </span>
            <span className="font-['Inter',sans-serif] text-[11px] text-[#617589]">{info.sub}</span>
          </div>
        </div>
        <div className="mt-[6px] pt-[6px] border-t border-[#f0f0f0]">
          <span
            className="rounded-[5px] px-[7px] py-[2px] text-[9px] text-white tracking-[0.5px]"
            style={{ backgroundColor: info.color, fontWeight: 700 }}
          >
            {info.badge}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function MobileStateToast({ sigla }: { sigla: string }) {
  const info = getTooltipData(sigla);
  return (
    <motion.div
      initial={{ opacity: 0, y: -16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="absolute top-[12px] left-[12px] right-[12px] z-30 pointer-events-none flex justify-center"
    >
      <div
        className="bg-white/97 backdrop-blur-lg rounded-[12px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-2 px-[14px] py-[10px] flex items-center gap-[10px]"
        style={{ borderColor: `${info.color}25` }}
      >
        <div
          className="w-[28px] h-[28px] rounded-[8px] flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${info.color}15` }}
        >
          {info.icon === "hq" ? (
            <Building size={14} style={{ color: info.color }} />
          ) : (
            <MapPin size={14} style={{ color: info.color }} />
          )}
        </div>
        <div className="min-w-0">
          <span className="font-['Inter',sans-serif] text-[13px] text-[#111418] block leading-tight" style={{ fontWeight: 700 }}>
            {info.title}
          </span>
          <span className="font-['Inter',sans-serif] text-[11px] text-[#617589]">{info.sub}</span>
        </div>
        <span
          className="shrink-0 rounded-[5px] px-[7px] py-[2px] text-[9px] text-white"
          style={{ backgroundColor: info.color, fontWeight: 700 }}
        >
          {info.badge}
        </span>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   UNIT PIN — Pure SVG pill marker (no image, no clipPath)
   ═══════════════════════════════════════════════════════════════════════════ */

function UnitPin({
  marker,
  isMobile,
  onMouseEnter,
  onMouseLeave
}: {
  marker: UnitMarker;
  isMobile: boolean;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: () => void;
}) {
  const isHQ = marker.type === "headquarters";
  const color = BRAND_ORANGE;
  const labelText = `${marker.label} · ${marker.city}/${marker.state}`;

  // Dimensions
  const fontSize = isMobile ? 9.5 : 11;
  const charWidth = fontSize * 0.56;
  const textWidth = labelText.length * charWidth;
  const iconSize = isMobile ? 12 : 14;
  const dotGap = 6;
  const pillH = isMobile ? 28 : 32;
  const pillPadX = 12;
  const pillW = pillPadX + iconSize + dotGap + textWidth + pillPadX;
  const pillR = pillH / 2;
  const pillX = -pillW / 2;
  const pillY = -(pillH + 16);
  const pointerTip = -6;

  return (
    <Marker coordinates={marker.coordinates}>
      {/* Pulse rings behind the anchor dot */}
      <motion.circle
        r={0}
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        animate={{ r: [6, 22], opacity: [0.5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: isHQ ? 0 : 1.2, ease: "easeOut" }}
      />
      <motion.circle
        r={0}
        fill={color}
        animate={{ r: [3, 16], opacity: [0.25, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: isHQ ? 0.4 : 1.6, ease: "easeOut" }}
      />

      {/* Shadow filter */}
      <defs>
        <filter id={`pin-shadow-${marker.state}`} x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.16" />
        </filter>
      </defs>

      {/* Pill + pointer group */}
      <g
        filter={`url(#pin-shadow-${marker.state})`}
        aria-label={`${marker.label}: ${marker.city}, ${marker.state}`}
        style={{ cursor: "pointer" }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Pointer triangle */}
        <polygon
          points={`0,${pointerTip} -6,${pillY + pillH} 6,${pillY + pillH}`}
          fill="white"
        />

        {/* White pill */}
        <rect
          x={pillX}
          y={pillY}
          width={pillW}
          height={pillH}
          rx={pillR}
          ry={pillR}
          fill="white"
          stroke={`${color}30`}
          strokeWidth={1.2}
        />

        {/* Instead of a dot inside the pill, we render an SVG path for MapPin */}
        {/* We use the path data of lucide MapPin scaled down to fit */}
        <g transform={`translate(${pillX + pillPadX}, ${pillY + (pillH - iconSize) / 2}) scale(${iconSize / 24})`}>
          <path
            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="10"
            r="3"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Label text */}
        <text
          x={pillX + pillPadX + iconSize + dotGap}
          y={pillY + pillH / 2}
          dominantBaseline="central"
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize,
            fontWeight: 700,
            fill: "#1f2937",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {labelText}
        </text>
      </g>

      {/* Central anchor pin instead of dot */}
      <g transform={`translate(-8, -16) scale(0.66)`}>
        <path
          d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
          fill={color}
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="10"
          r="3"
          fill="white"
        />
      </g>
    </Marker>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export function BrazilMapInteractive() {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [showMobileLegend, setShowMobileLegend] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Pre-fetch GeoJSON to detect load / error
  useEffect(() => {
    setMapError(false);
    setMapReady(false);
    const controller = new AbortController();

    fetch(GEO_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then(() => setMapReady(true))
      .catch((err) => {
        if (err.name !== "AbortError") setMapError(true);
      });

    return () => controller.abort();
  }, [retryCount]);

  const handleRetry = useCallback(() => setRetryCount((c) => c + 1), []);

  const mapConfig = useMemo(
    () => ({
      width: 800,
      height: isMobile ? 880 : 540,
      scale: isMobile ? 600 : 850,
      centerY: isMobile ? -13 : -15,
    }),
    [isMobile]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current || !hoveredState || isMobile) return;
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    },
    [hoveredState, isMobile]
  );

  const handleGeoInteraction = useCallback(
    (sigla: string, e: React.MouseEvent<SVGPathElement>) => {
      if (!COVERAGE_STATES.has(sigla)) return;
      if (isMobile) {
        setSelectedState((prev) => (prev === sigla ? null : sigla));
      } else {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setHoveredState(sigla);
        setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    },
    [isMobile]
  );

  const handleGeoLeave = useCallback(() => {
    if (!isMobile) {
      setHoveredState(null);
      setTooltipPos(null);
    }
  }, [isMobile]);

  const containerWidth = containerRef.current?.offsetWidth ?? 800;

  /* ── Loading / error gates ──────────────────────────────────────── */

  if (mapError) return <MapError onRetry={handleRetry} />;
  if (!mapReady) return <MapSkeleton isMobile={isMobile} />;

  /* ── Legend items ────────────────────────────────────────────────── */

  const legendItems = [
    { color: BRAND_ORANGE, label: "2 Unidades Cristal Poços", Icon: Building },
    { color: "#bfdbfe", label: "Estado atendido", Icon: MapPin },
  ];

  return (
    <div className="w-full space-y-[16px]">
      {/* ═══════════ MAP CONTAINER ═══════════ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        ref={containerRef}
        className="relative w-full rounded-[20px] md:rounded-[28px] overflow-hidden"
        style={{
          aspectRatio: isMobile ? "3 / 4" : "16 / 9",
          background: "linear-gradient(145deg, #f0f7ff 0%, #e6f0fd 30%, #f5f8ff 60%, #edf4ff 100%)",
          boxShadow: "0 8px 48px rgba(19,127,236,0.1), 0 2px 8px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
        }}
        onMouseMove={handleMouseMove}
      >
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(19,127,236,0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* ═══════════ SVG MAP ═══════════ */}
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: mapConfig.scale, center: [-53.0, mapConfig.centerY] }}
          width={mapConfig.width}
          height={mapConfig.height}
          style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
        >
          {/* ── States ── */}
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const sigla = getSigla(geo.properties as Record<string, unknown>);
                const isHov = hoveredState === sigla;
                const isSel = selectedState === sigla;
                const isInteractive = COVERAGE_STATES.has(sigla);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={getStateFill(sigla, isHov, isSel)}
                    stroke={getStateStroke(sigla)}
                    strokeWidth={getStateStrokeWidth(sigla)}
                    strokeLinejoin="round"
                    tabIndex={isInteractive ? 0 : undefined}
                    role={isInteractive ? "button" : undefined}
                    aria-label={isInteractive ? `${STATE_NAMES[sigla] || sigla} — estado atendido` : undefined}
                    style={{
                      default: { outline: "none", transition: "fill 0.25s ease" },
                      hover: { outline: "none", cursor: isInteractive ? "pointer" : "default" },
                      pressed: { outline: "none" },
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) handleGeoInteraction(sigla, e as unknown as React.MouseEvent<SVGPathElement>);
                    }}
                    onMouseLeave={handleGeoLeave}
                    onClick={(e) => {
                      if (isMobile) handleGeoInteraction(sigla, e as unknown as React.MouseEvent<SVGPathElement>);
                    }}
                    onFocus={() => { if (COVERAGE_STATES.has(sigla)) setHoveredState(sigla); }}
                    onBlur={() => setHoveredState(null)}
                  />
                );
              })
            }
          </Geographies>

          {/* ── State abbreviation labels ── */}
          {Object.entries(COVERAGE_CENTROIDS).map(([sigla, coords]) => {
            const isUnit = sigla === "SC" || sigla === "MA";
            return (
              <Marker key={`lbl-${sigla}`} coordinates={coords}>
                <text
                  textAnchor="middle"
                  dominantBaseline="middle"
                  aria-hidden="true"
                  style={{
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: isMobile ? 11 : 13,
                    fontWeight: 800,
                    fill: isUnit ? "#ffffff" : "#1e3a5f",
                    paintOrder: "stroke",
                    stroke: isUnit ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.95)",
                    strokeWidth: isUnit ? 3 : 4,
                    strokeLinejoin: "round",
                    pointerEvents: "none",
                    userSelect: "none",
                    letterSpacing: "1px",
                  }}
                >
                  {sigla}
                </text>
              </Marker>
            );
          })}

          {/* ── Unit Pins (simple pill markers) ── */}
          {UNIT_MARKERS.map((m) => (
            <UnitPin
              key={m.state}
              marker={m}
              isMobile={isMobile}
              onMouseEnter={(e) => {
                if (containerRef.current) {
                  const rect = containerRef.current.getBoundingClientRect();
                  setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                }
                setHoveredState(m.state);
              }}
              onMouseLeave={() => {
                setHoveredState(null);
                setTooltipPos(null);
              }}
            />
          ))}
        </ComposableMap>

        {/* ═══════════ OVERLAYS ═══════════ */}

        {/* Desktop tooltip */}
        <AnimatePresence>
          {!isMobile && hoveredState && tooltipPos && (
            <StateTooltip key={hoveredState} sigla={hoveredState} x={tooltipPos.x} y={tooltipPos.y} containerW={containerWidth} />
          )}
        </AnimatePresence>

        {/* Mobile state toast */}
        <AnimatePresence>
          {isMobile && selectedState && (
            <MobileStateToast key={selectedState} sigla={selectedState} />
          )}
        </AnimatePresence>

        {/* ── Desktop overlays ── */}

        {/* Title badge (top-left) — premium glassmorphism */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="absolute top-[24px] left-[24px] z-20 flex flex-col gap-[16px] hidden md:flex"
        >
          <div
            className="relative overflow-hidden rounded-[18px] px-[20px] py-[14px] self-start"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,247,255,0.92) 100%)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 8px 32px rgba(19,127,236,0.12), 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
              border: "1px solid rgba(19,127,236,0.1)",
            }}
          >
            {/* Decorative gradient bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ background: `linear-gradient(90deg, ${BRAND_BLUE}, #60a5fa, ${BRAND_ORANGE})` }}
            />
            <div className="flex items-center gap-[12px]">
              <div
                className="w-[40px] h-[40px] rounded-[12px] flex items-center justify-center shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${BRAND_BLUE}15, ${BRAND_BLUE}08)`,
                  border: `1px solid ${BRAND_BLUE}15`,
                }}
              >
                <Droplets size={20} className="text-[#137fec]" />
              </div>
              <div>
                <p className="font-['Inter',sans-serif] text-[15px] text-[#111418] leading-tight" style={{ fontWeight: 800 }}>
                  Presença Nacional
                </p>
                <p className="font-['Inter',sans-serif] text-[11px] text-[#617589] mt-[2px]">
                  Cobertura estratégica em todo o Brasil
                </p>
              </div>
            </div>
          </div>

          {/* STATS CARDS MOVED HERE BELOW PRESENÇA NACIONAL */}
          <div className="flex flex-col gap-[12px]">
            {[
              {
                value: "9",
                label: "Estados",
                sub: "Atendidos",
                accent: BRAND_BLUE,
                gradient: `linear-gradient(135deg, ${BRAND_BLUE}, #3b82f6)`,
                bgGrad: "linear-gradient(135deg, rgba(19,127,236,0.06) 0%, rgba(59,130,246,0.03) 100%)",
                Icon: Map,
              },
              {
                value: "2",
                label: "Unidades",
                sub: "SC, MA",
                accent: BRAND_ORANGE,
                gradient: `linear-gradient(135deg, ${BRAND_ORANGE}, #fb923c)`,
                bgGrad: "linear-gradient(135deg, rgba(249,115,22,0.06) 0%, rgba(251,146,60,0.03) 100%)",
                Icon: MapPin,
              },
              {
                value: "25+",
                label: "Anos",
                sub: "de Experiência",
                accent: BRAND_BLUE,
                gradient: `linear-gradient(135deg, ${BRAND_BLUE}, #60a5fa)`,
                bgGrad: "linear-gradient(135deg, rgba(19,127,236,0.06) 0%, rgba(96,165,250,0.03) 100%)",
                Icon: Calendar,
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                className="relative overflow-hidden rounded-[14px] px-[16px] py-[12px] w-[220px]"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.96) 0%, rgba(248,250,255,0.93) 100%)",
                  backdropFilter: "blur(24px)",
                  boxShadow: `0 4px 20px ${stat.accent}12, 0 1px 4px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)`,
                  border: `1px solid ${stat.accent}15`,
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-[12px] right-[12px] h-[2px] rounded-b-full"
                  style={{ background: stat.gradient }}
                />

                <div className="relative flex items-center gap-[12px]">
                  {/* Icon */}
                  <div
                    className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center shrink-0"
                    style={{
                      background: stat.bgGrad,
                      border: `1.5px solid ${stat.accent}18`,
                    }}
                  >
                    <stat.Icon size={18} style={{ color: stat.accent }} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-baseline gap-[6px]">
                      <span className="font-['Inter',sans-serif] text-[20px] tracking-tight leading-none" style={{ fontWeight: 800, color: stat.accent }}>
                        {stat.value}
                      </span>
                      <span className="font-['Inter',sans-serif] text-[13px] text-[#111418] leading-none" style={{ fontWeight: 700 }}>
                        {stat.label}
                      </span>
                    </div>
                    <span className="font-['Inter',sans-serif] text-[11px] text-[#617589] mt-[2px] block leading-none">
                      {stat.sub}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Legend (top-right, desktop) — refined card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute top-[16px] right-[16px] z-20 hidden md:block"
        >
          <div
            className="relative overflow-hidden rounded-[18px] p-[18px]"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,255,0.92) 100%)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.9)",
              border: "1px solid rgba(19,127,236,0.08)",
            }}
          >
            <p
              className="font-['Inter',sans-serif] text-[9px] text-[#9ca3af] uppercase tracking-[2px] mb-[14px]"
              style={{ fontWeight: 700 }}
            >
              Legenda
            </p>
            <div className="space-y-[10px]">
              {legendItems.map((item) => (
                <div key={item.label} className="flex items-center gap-[10px]">
                  <div
                    className="w-[20px] h-[20px] rounded-[6px] shrink-0 flex items-center justify-center"
                    style={{
                      backgroundColor: `${item.color}20`,
                      border: `1.5px solid ${item.color}40`,
                    }}
                  >
                    {item.Icon ? (
                      <item.Icon size={12} style={{ color: item.color }} />
                    ) : (
                      <div className="w-[8px] h-[8px] rounded-[3px]" style={{ backgroundColor: item.color }} />
                    )}
                  </div>
                  <span className="font-['Inter',sans-serif] text-[11px] text-[#374151] whitespace-nowrap" style={{ fontWeight: 500 }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Removido o Desktop Stats bar redundante inferior */}

        {/* Mobile hint */}
        <AnimatePresence>
          {isMobile && !selectedState && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute top-[14px] left-0 right-0 flex justify-center pointer-events-none z-20"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-full px-[16px] py-[7px] flex items-center gap-[8px] shadow-[0_4px_15px_rgba(0,0,0,0.08)]">
                <MapPin size={12} className="text-[#137fec]" />
                <p className="font-['Inter',sans-serif] text-[11px] text-[#374151]" style={{ fontWeight: 600 }}>
                  Toque nos estados coloridos para mais info
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ═══════════ MOBILE EXTRAS (below map) ═══════════ */}

      {/* Mobile legend (collapsible) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="md:hidden"
      >
        <button
          onClick={() => setShowMobileLegend((v) => !v)}
          className="flex items-center justify-between w-full rounded-[14px] px-[16px] py-[12px]"
          aria-expanded={showMobileLegend}
          aria-controls="mobile-map-legend"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,255,0.95))",
            border: "1px solid rgba(19,127,236,0.1)",
            boxShadow: "0 4px 16px rgba(19,127,236,0.06), 0 1px 3px rgba(0,0,0,0.04)",
          }}
        >
          <span className="font-['Inter',sans-serif] text-[13px] text-[#374151] flex items-center gap-[8px]" style={{ fontWeight: 600 }}>
            <MapPin size={14} className="text-[#137fec]" />
            Legenda do mapa
          </span>
          <motion.div animate={{ rotate: showMobileLegend ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={16} className="text-[#9ca3af]" />
          </motion.div>
        </button>

        <AnimatePresence>
          {showMobileLegend && (
            <motion.div
              id="mobile-map-legend"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-[8px] pt-[10px]">
                {[
                  { color: BRAND_ORANGE, label: "2 Unidades", sub: "Cristal Poços", Icon: Building },
                  { color: "#bfdbfe", label: "Atendido", sub: "9 estados", Icon: MapPin },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-[10px] rounded-[12px] px-[12px] py-[10px]"
                    style={{
                      background: "linear-gradient(135deg, #ffffff, #fafbff)",
                      border: `1px solid ${item.color === "#e8ecf1" ? "#e5e7eb" : `${item.color}20`}`,
                    }}
                  >
                    <div
                      className="w-[28px] h-[28px] rounded-[8px] shrink-0 flex items-center justify-center"
                      style={{
                        backgroundColor: `${item.color}20`,
                        border: `1.5px solid ${item.color}30`,
                      }}
                    >
                      {item.Icon ? (
                        <item.Icon
                          size={13}
                          style={{
                            color:
                              item.color === "#bfdbfe" ? "#3b82f6" : item.color === "#e8ecf1" ? "#9ca3af" : item.color,
                          }}
                        />
                      ) : (
                        <div className="w-[10px] h-[10px] rounded-[3px]" style={{ backgroundColor: item.color }} />
                      )}
                    </div>
                    <div>
                      <p className="font-['Inter',sans-serif] text-[12px] text-[#111418] leading-tight" style={{ fontWeight: 700 }}>
                        {item.label}
                      </p>
                      <p className="font-['Inter',sans-serif] text-[10px] text-[#617589]">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Mobile stats — premium cards with icon, accent line, description ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="md:hidden grid grid-cols-3 gap-[10px]"
      >
        {[
          {
            value: "9",
            label: "Estados",
            sub: "Atendidos",
            color: BRAND_BLUE,
            gradient: `linear-gradient(135deg, ${BRAND_BLUE}, #3b82f6)`,
            Icon: Map,
          },
          {
            value: "2",
            label: "Unidades",
            sub: "Operacionais",
            color: BRAND_ORANGE,
            gradient: `linear-gradient(135deg, ${BRAND_ORANGE}, #fb923c)`,
            Icon: Building,
          },
          {
            value: "25+",
            label: "Anos",
            sub: "Experiência",
            color: BRAND_BLUE,
            gradient: `linear-gradient(135deg, ${BRAND_BLUE}, #60a5fa)`,
            Icon: Calendar,
          },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.08 }}
            className="relative overflow-hidden rounded-[16px] py-[16px] px-[12px] text-center"
            style={{
              background: "linear-gradient(160deg, #ffffff 0%, #fafbff 100%)",
              border: `1px solid ${stat.color}15`,
              boxShadow: `0 6px 24px ${stat.color}10, 0 2px 6px rgba(0,0,0,0.03)`,
            }}
          >
            {/* Top gradient accent */}
            <div
              className="absolute top-0 left-[20%] right-[20%] h-[2.5px] rounded-b-full"
              style={{ background: stat.gradient }}
            />

            {/* Subtle corner glow */}
            <div
              className="absolute top-[-15px] right-[-15px] w-[50px] h-[50px] rounded-full opacity-40"
              style={{ background: `radial-gradient(circle, ${stat.color}12, transparent 70%)` }}
            />

            {/* Icon */}
            <div className="flex justify-center mb-[8px]">
              <div
                className="w-[32px] h-[32px] rounded-[10px] flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}10, ${stat.color}05)`,
                  border: `1.5px solid ${stat.color}15`,
                }}
              >
                <stat.Icon size={15} style={{ color: stat.color }} />
              </div>
            </div>

            <p
              className="font-['Inter',sans-serif] text-[28px] leading-none tracking-[-0.5px]"
              style={{ fontWeight: 900, color: stat.color }}
            >
              {stat.value}
            </p>
            <p className="font-['Inter',sans-serif] text-[11px] text-[#374151] mt-[4px]" style={{ fontWeight: 700 }}>
              {stat.label}
            </p>
            <p className="font-['Inter',sans-serif] text-[9px] text-[#9ca3af] mt-[1px]" style={{ fontWeight: 500 }}>
              {stat.sub}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div >
  );
}