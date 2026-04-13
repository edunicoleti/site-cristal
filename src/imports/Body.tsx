import svgPaths from "./svg-wcjskpv9i9";
import imgHeroSection from "figma:asset/6f3f1e25c33a868dc8533d3ce96ab231c98b4d58.png";
import imgCristalLogoJpg1 from "figma:asset/2a3d4d6193e931ad4cdcad44d0a2dfef321b2778.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[36px] w-[416.75px]">
        <p className="leading-[40px] whitespace-pre-wrap">Perfuração e Instalação</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[#617589] text-[18px] w-[628.14px] whitespace-pre-wrap">
        <p className="mb-0">Dominamos as mais complexas técnicas de perfuração, atendendo desde</p>
        <p>residências até grandes indústrias e agronegócios.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="max-w-[672px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] relative">
        <Heading1 />
        <Container3 />
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#137fec] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pl-[28px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[23.132px] relative shrink-0 w-[22.54px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5398 23.1324">
        <g id="Container">
          <path d={svgPaths.p1ee3ab40} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(19,127,236,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[8px] size-[56px] top-[24px]" data-name="Overlay">
      <Container5 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[104px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[20px] w-[165.48px]">
        <p className="leading-[28px] whitespace-pre-wrap">Aquífero Guarani</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] pb-[0.625px] right-[24px] top-[142.88px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[137px] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#617589] text-[14px] w-[172.89px] whitespace-pre-wrap">
        <p className="mb-0">Especialistas em</p>
        <p className="mb-0">perfurações de alta</p>
        <p className="mb-0">profundidade e grande</p>
        <p className="mb-0">diâmetro, alcançando</p>
        <p className="mb-0">reservatórios estratégicos</p>
        <p>com máxima segurança.</p>
      </div>
    </div>
  );
}

function Container7() {
  return <div className="shrink-0 size-[9.333px]" data-name="Container" />;
}

function Link() {
  return (
    <div className="absolute content-stretch flex items-center left-[24px] right-[24px] top-[296px]" data-name="Link">
      <Container7 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#f6f7f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Card 1">
      <Overlay />
      <Heading2 />
      <Container6 />
      <Link />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[23.813px] relative shrink-0 w-[22.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 23.8125">
        <g id="Container">
          <path d={svgPaths.p3eeb2280} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="absolute bg-[rgba(19,127,236,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[8px] size-[56px] top-[24px]" data-name="Overlay">
      <Container8 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[104px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[#111418] text-[20px] w-[135.47px] whitespace-pre-wrap">
        <p className="mb-0">Poços</p>
        <p>Sedimentares</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] pb-[0.625px] right-[24px] top-[170.88px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[137px] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#617589] text-[14px] w-[172.5px] whitespace-pre-wrap">
        <p className="mb-0">Soluções otimizadas para</p>
        <p className="mb-0">terrenos com camadas de</p>
        <p className="mb-0">sedimentos, utilizando</p>
        <p className="mb-0">revestimentos especiais</p>
        <p className="mb-0">para garantir a pureza da</p>
        <p>água.</p>
      </div>
    </div>
  );
}

function Container10() {
  return <div className="shrink-0 size-[9.333px]" data-name="Container" />;
}

function Link1() {
  return (
    <div className="absolute content-stretch flex items-center left-[24px] right-[24px] top-[324px]" data-name="Link">
      <Container10 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#f6f7f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Card 2">
      <Overlay1 />
      <Heading3 />
      <Container9 />
      <Link1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Container">
          <path d={svgPaths.p3da682a0} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="absolute bg-[rgba(19,127,236,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[8px] size-[56px] top-[24px]" data-name="Overlay">
      <Container11 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[104px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[#111418] text-[20px] w-[142.09px] whitespace-pre-wrap">
        <p className="mb-0">Bombeamento</p>
        <p>Solar</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] pb-[0.75px] right-[24px] top-[171px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[114px] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#617589] text-[14px] w-[170.06px] whitespace-pre-wrap">
        <p className="mb-0">Energia limpa e economia</p>
        <p className="mb-0">real. Instalamos sistemas</p>
        <p className="mb-0">fotovoltaicos dedicados</p>
        <p className="mb-0">para o bombeamento</p>
        <p>autônomo e sustentável.</p>
      </div>
    </div>
  );
}

function Container13() {
  return <div className="shrink-0 size-[9.333px]" data-name="Container" />;
}

function Link2() {
  return (
    <div className="absolute content-stretch flex items-center left-[24px] right-[24px] top-[301.25px]" data-name="Link">
      <Container13 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#f6f7f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Card 3">
      <Overlay2 />
      <Heading4 />
      <Container12 />
      <Link2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[21.25px] relative shrink-0 w-[27.469px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.4688 21.25">
        <g id="Container">
          <path d={svgPaths.p2497f100} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="absolute bg-[rgba(19,127,236,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[8px] size-[56px] top-[24px]" data-name="Overlay">
      <Container14 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[14px] top-[104px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[#111418] text-[20px] w-[142px] whitespace-pre-wrap">
        <p className="mb-0">Sistemas</p>
        <p>Hidráulicos</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] pb-[0.75px] right-[24px] top-[171px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[114px] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#617589] text-[14px] w-[171.2px] whitespace-pre-wrap">
        <p className="mb-0">Montagem completa de</p>
        <p className="mb-0">quadros de comando,</p>
        <p className="mb-0">redes de distribuição e</p>
        <p className="mb-0">reservatórios, entregando</p>
        <p>{`o projeto "chave na mão".`}</p>
      </div>
    </div>
  );
}

function Container16() {
  return <div className="shrink-0 size-[9.333px]" data-name="Container" />;
}

function Link3() {
  return (
    <div className="absolute content-stretch flex items-center left-[24px] right-[24px] top-[301.25px]" data-name="Link">
      <Container16 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#f6f7f8] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] self-stretch" data-name="Card 4">
      <Overlay3 />
      <Heading5 />
      <Container15 />
      <Link3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <VerticalBorder />
      <Container4 />
    </div>
  );
}

function SectionPerfuracaoEInstalacao() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[160px] py-[96px] right-0 top-[480px]" data-name="Section: Perfuração e Instalação">
      <Container1 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[36px] w-[555.75px]">
        <p className="leading-[40px] whitespace-pre-wrap">Manutenção e Sustentabilidade</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[#617589] text-[18px] w-[664.69px] whitespace-pre-wrap">
        <p className="mb-0">Cuidamos do seu patrimônio com agilidade. A manutenção preventiva garante</p>
        <p>a longevidade e a qualidade da água do seu poço.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="max-w-[672px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] relative">
        <Heading6 />
        <Container19 />
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#137fec] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pl-[28px] relative w-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="h-[27px] relative shrink-0 w-[30px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 27">
            <path d={svgPaths.p2d0baf00} fill="var(--fill-0, #137FEC)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[18px] w-[141.33px]">
        <p className="leading-[28px] whitespace-pre-wrap">Assistência 24h</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[84px] justify-center leading-[21px] not-italic relative shrink-0 text-[#617589] text-[14px] w-[181.31px] whitespace-pre-wrap">
        <p className="mb-0">Equipes de prontidão para</p>
        <p className="mb-0">emergências mecânicas ou</p>
        <p className="mb-0">elétricas no seu sistema de</p>
        <p>bombeamento.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-full items-start relative">
        <Heading7 />
        <Container23 />
      </div>
    </div>
  );
}

function MaintenanceCard() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[20px] items-start left-0 p-[25px] right-[661.34px] rounded-[12px] top-0" data-name="Maintenance Card 1">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="h-[30px] relative shrink-0 w-[27px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 30">
            <path d={svgPaths.p36be8500} fill="var(--fill-0, #137FEC)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[#111418] text-[18px] w-[110.23px] whitespace-pre-wrap">
        <p className="mb-0">Limpeza e</p>
        <p>Desinfecção</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[105px] justify-center leading-[21px] not-italic relative shrink-0 text-[#617589] text-[14px] w-[171.82px] whitespace-pre-wrap">
        <p className="mb-0">Processos químicos e</p>
        <p className="mb-0">mecânicos rigorosos para</p>
        <p className="mb-0">eliminar sedimentos e</p>
        <p className="mb-0">agentes biológicos</p>
        <p>prejudiciais.</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-full items-start relative">
        <Heading8 />
        <Container26 />
      </div>
    </div>
  );
}

function MaintenanceCard1() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[20px] items-start left-[330.66px] p-[25px] right-[330.67px] rounded-[12px] top-0" data-name="Maintenance Card 2">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="h-[30px] relative shrink-0 w-[24px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 30">
            <path d={svgPaths.p3f9f9400} fill="var(--fill-0, #137FEC)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[#111418] text-[18px] w-[134px] whitespace-pre-wrap">
        <p className="mb-0">Análise de</p>
        <p>Potabilidade</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[84px] justify-center leading-[21px] not-italic relative shrink-0 text-[#617589] text-[14px] w-[197px] whitespace-pre-wrap">
        <p className="mb-0">Monitoramento constante da</p>
        <p className="mb-0">qualidade da água seguindo</p>
        <p className="mb-0">as normas dos órgãos</p>
        <p>reguladores.</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-full items-start relative">
        <Heading9 />
        <Container29 />
      </div>
    </div>
  );
}

function MaintenanceCard2() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[20px] items-start left-[661.33px] p-[25px] right-[0.01px] rounded-[12px] top-0" data-name="Maintenance Card 3">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="h-[27.038px] relative shrink-0 w-[27.788px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.7875 27.0375">
            <path d={svgPaths.p2d750900} fill="var(--fill-0, #137FEC)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[#111418] text-[18px] w-[142.33px] whitespace-pre-wrap">
        <p className="mb-0">Recuperação de</p>
        <p>Poços</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[105px] justify-center leading-[21px] not-italic relative shrink-0 text-[#617589] text-[14px] w-[142px] whitespace-pre-wrap">
        <p className="mb-0">Reforma e reativação de</p>
        <p className="mb-0">poços antigos ou</p>
        <p className="mb-0">abandonados com</p>
        <p className="mb-0">tecnologia de revestimento</p>
        <p>interno.</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-full items-start relative">
        <Heading10 />
        <Container32 />
      </div>
    </div>
  );
}

function MaintenanceCard3() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[20px] items-start left-0 p-[25px] right-[661.34px] rounded-[12px] top-[251px]" data-name="Maintenance Card 4">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="h-[31.5px] relative shrink-0 w-[33px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 31.5">
            <path d={svgPaths.p3bb1200} fill="var(--fill-0, #137FEC)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[#111418] text-[18px] w-[125.54px] whitespace-pre-wrap">
        <p className="mb-0">Outorga e</p>
        <p>Regularização</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[84px] justify-center leading-[21px] not-italic relative shrink-0 text-[#617589] text-[14px] w-[174.53px] whitespace-pre-wrap">
        <p className="mb-0">Consultoria completa para</p>
        <p className="mb-0">licenciamento ambiental e</p>
        <p className="mb-0">regularização documental</p>
        <p>junto ao DAEE/IGAM.</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-full items-start relative">
        <Heading11 />
        <Container35 />
      </div>
    </div>
  );
}

function MaintenanceCard4() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[20px] items-start left-[330.66px] p-[25px] right-[330.67px] rounded-[12px] top-[251px]" data-name="Maintenance Card 5">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="relative shrink-0 size-[27px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
            <path d={svgPaths.p18f6af16} fill="var(--fill-0, #137FEC)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[18px] w-[133.78px]">
        <p className="leading-[28px] whitespace-pre-wrap">Teste de Vazão</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[84px] justify-center leading-[21px] not-italic relative shrink-0 text-[#617589] text-[14px] w-[177.61px] whitespace-pre-wrap">
        <p className="mb-0">Ensaios de bombeamento</p>
        <p className="mb-0">precisos para determinar a</p>
        <p className="mb-0">capacidade produtiva real</p>
        <p>do aquífero.</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-full items-start relative">
        <Heading12 />
        <Container38 />
      </div>
    </div>
  );
}

function MaintenanceCard5() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[20px] items-start left-[661.33px] p-[25px] right-[0.01px] rounded-[12px] top-[251px]" data-name="Maintenance Card 6">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[470px] relative shrink-0 w-full" data-name="Container">
      <MaintenanceCard />
      <MaintenanceCard1 />
      <MaintenanceCard2 />
      <MaintenanceCard3 />
      <MaintenanceCard4 />
      <MaintenanceCard5 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <VerticalBorder1 />
      <Container20 />
    </div>
  );
}

function SectionManutencaoESustentabilidade() {
  return (
    <div className="absolute bg-[#f6f7f8] content-stretch flex flex-col items-start left-0 px-[160px] py-[96px] right-0 top-[1200.5px]" data-name="Section: Manutenção e Sustentabilidade">
      <Container17 />
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(19,127,236,0.2)] content-stretch flex flex-col items-center px-[17px] py-[7px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(19,127,236,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[12px] text-center tracking-[1.2px] uppercase w-[152px]">
        <p className="leading-[16px] whitespace-pre-wrap">Soluções em Água</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0" data-name="Margin">
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[60px] justify-center leading-[0] not-italic relative shrink-0 text-[60px] text-center text-white tracking-[-1.5px] w-[484.38px]">
        <p className="leading-[60px] whitespace-pre-wrap">Nossos Serviços</p>
      </div>
    </div>
  );
}

function Heading1Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0" data-name="Heading 1:margin">
      <Heading />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] px-[35.14px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.9)] text-center w-[601.72px] whitespace-pre-wrap">
        <p className="mb-0">Tecnologia de ponta e 25 anos de expertise para garantir o seu</p>
        <p>abastecimento de água com eficiência e sustentabilidade.</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="flex-[1_0_0] max-w-[960px] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center max-w-[inherit] px-[16px] relative size-full">
          <Margin />
          <Heading1Margin />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute content-stretch flex flex-col h-[480px] items-start justify-center left-0 overflow-clip px-[160px] right-0 top-0" data-name="Hero Section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[266.67%] left-0 max-w-none top-[-83.33%] w-full" src={imgHeroSection} />
        </div>
        <div className="absolute bg-gradient-to-b from-[rgba(16,25,34,0.7)] inset-0 to-[rgba(16,25,34,0.4)]" />
      </div>
      <Container39 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[48px] not-italic relative shrink-0 text-[48px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">Pronto para ter sua própria fonte</p>
        <p>de água?</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[576px] relative shrink-0 w-[576px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] w-[574.95px] whitespace-pre-wrap">
        <p className="mb-0">Nossa equipe técnica está pronta para realizar um estudo de</p>
        <p>viabilidade gratuito para o seu projeto.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[32px] py-[17px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[16px] text-center w-[189.7px]">
        <p className="leading-[24px] whitespace-pre-wrap">Solicitar Estudo Gratuito</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(19,127,236,0.2)] content-stretch flex flex-col items-center justify-center px-[33px] py-[17px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[148.59px]">
        <p className="leading-[24px] whitespace-pre-wrap">Falar no WhatsApp</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Container">
      <Heading13 />
      <Container42 />
      <Container43 />
    </div>
  );
}

function CtaSection() {
  return (
    <div className="absolute bg-[#137fec] content-stretch flex items-center justify-center left-[160px] max-w-[1280px] overflow-clip p-[64px] right-[160px] rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(19,127,236,0.2)] top-[2102.5px]" data-name="CTA Section">
      <div className="absolute flex inset-[0_-24.13%_0_75.87%] items-center justify-center">
        <div className="-skew-x-20 flex-none h-[419.29px] scale-y-94 w-[319.98px]">
          <div className="bg-[rgba(255,255,255,0.1)] size-full" data-name="Overlay" />
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.1)] blur-[32px] bottom-[-80px] right-[-80px] rounded-[9999px] size-[288px]" data-name="Overlay+Blur" />
      <Container41 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[2576.5px] left-0 right-0 top-[65px]" data-name="Main">
      <SectionPerfuracaoEInstalacao />
      <SectionManutencaoESustentabilidade />
      <HeroSection />
      <CtaSection />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.pd5e6a80} fill="var(--fill-0, #137FEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-[116.22px]">
        <p className="leading-[28px] whitespace-pre-wrap">Cristal Poços</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full whitespace-pre-wrap">
        <p className="mb-0">Referência em perfuração e</p>
        <p className="mb-0">manutenção de poços</p>
        <p className="mb-0">artesianos há mais de 25</p>
        <p className="mb-0">anos. Qualidade e</p>
        <p className="mb-0">compromisso com o meio</p>
        <p>ambiente.</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[22.875px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container46 />
      <Container49 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Links Rápidos</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Quem Somos</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Serviços</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Portfólio de Obras</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Contato e Suporte</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading14 />
      <List />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Contato</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p3d9b5d80} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container52 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-[101.44px]">
        <p className="leading-[20px] whitespace-pre-wrap">(11) 9999-9999</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 9.33333">
        <g id="Container">
          <path d={svgPaths.p1c659f80} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[220.96px]" data-name="Item">
      <Container53 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-[194.94px]">
        <p className="leading-[20px] whitespace-pre-wrap">contato@cristalpocos.com.br</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.p3d8f00c0} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container54 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40px] justify-center leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-[131.21px] whitespace-pre-wrap">
        <p className="mb-0">Rua Industrial, 123 -</p>
        <p>Distrito Industrial</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[11.5px] items-start relative shrink-0 w-full" data-name="List">
      <Item4 />
      <Item5 />
      <Item6 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading15 />
      <List1 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Redes Sociais</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_815)" id="SVG">
          <path d={svgPaths.p35a23d00} fill="var(--fill-0, white)" fillOpacity="0.7" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_815">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link">
      <Svg1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_812)" id="SVG">
          <path d={svgPaths.pbb77300} fill="var(--fill-0, white)" fillOpacity="0.7" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_812">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link">
      <Svg2 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading16 />
      <Container56 />
    </div>
  );
}

function Container44() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[48px] items-start justify-center max-w-[inherit] relative w-full">
        <Container45 />
        <Container50 />
        <Container51 />
        <Container55 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] w-[360.38px]">
          <p className="leading-[16px] whitespace-pre-wrap">© 2024 Cristal Poços Artesianos. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] w-[129.08px]">
        <p className="leading-[16px] whitespace-pre-wrap">Política de Privacidade</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] w-[86.11px]">
        <p className="leading-[16px] whitespace-pre-wrap">Termos de Uso</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] h-full items-start relative">
        <Link6 />
        <Link7 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between max-w-[inherit] pt-[33px] relative w-full">
        <Container57 />
        <Container58 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#101922] content-stretch flex flex-col gap-[64px] items-start left-0 pb-[64px] pt-[65px] px-[160px] right-0 top-[2641.5px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container44 />
      <HorizontalBorder />
    </div>
  );
}

function Svg3() {
  return <div className="shrink-0 size-[32px]" data-name="SVG" />;
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="h-[68px] relative shrink-0 w-[104px]" data-name="Cristal Logo.jpg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCristalLogoJpg1} />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container61 />
      <Heading17 />
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[14px] w-[39.86px]">
        <p className="leading-[20px] whitespace-pre-wrap">Início</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[14px] w-[70.28px]">
        <p className="leading-[20px] whitespace-pre-wrap">Sobre Nós</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#137fec] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[14px] w-[60.28px]">
        <p className="leading-[20px] whitespace-pre-wrap">Serviços</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[14px] w-[53.8px]">
        <p className="leading-[20px] whitespace-pre-wrap">Contato</p>
      </div>
    </div>
  );
}

function Link12() {
  return <div className="h-[20px] shrink-0 w-[53.8px]" data-name="Link" />;
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Nav">
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
      <Link12 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#137fec] content-stretch flex h-[40px] items-center justify-center min-w-[140px] pb-[10.5px] pt-[9.5px] px-[20px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[135.78px]">
        <p className="leading-[20px] whitespace-pre-wrap">Solicitar Orçamento</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[32px] items-center justify-end min-h-px min-w-px relative" data-name="Container">
      <Nav />
      <Button2 />
    </div>
  );
}

function Container59() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] relative w-full">
        <Container60 />
        <Container62 />
      </div>
    </div>
  );
}

function HeaderNavigation() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col h-[98px] items-center justify-center left-0 pb-[13px] pt-[12px] px-[160px] right-0 top-0" data-name="Header - Navigation">
      <div aria-hidden="true" className="absolute border-[#f0f2f4] border-b border-solid inset-0 pointer-events-none" />
      <Container59 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[3072px] min-h-[3049px] relative shrink-0 w-full" data-name="Container">
      <Main />
      <Footer />
      <HeaderNavigation />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#f6f7f8] content-stretch flex flex-col items-start relative size-full" data-name="Body">
      <Container />
    </div>
  );
}