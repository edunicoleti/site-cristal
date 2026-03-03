import svgPaths from "./svg-pp03ptoybo";
import imgSection from "figma:asset/ec85bce54266d7aaaf8f0e10d293c5227cd2f32f.png";
import imgImage1 from "figma:asset/8d3f7a1ea781c37e7c58080df10903428952da3e.png";
import imgCristalLogoJpg1 from "figma:asset/2a3d4d6193e931ad4cdcad44d0a2dfef321b2778.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[14px] text-center tracking-[2.8px] uppercase w-[215.3px]">
        <p className="leading-[20px] whitespace-pre-wrap">Diferenciais Cristal</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[36px] text-center tracking-[-0.9px] w-[605.41px]">
        <p className="leading-[40px] whitespace-pre-wrap">Por que escolher a nossa empresa?</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Heading2 />
      <div className="bg-[#f97316] h-[4px] rounded-[9999px] shrink-0 w-[80px]" data-name="Background" />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[18.506px] relative shrink-0 w-[18.032px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0318 18.5059">
        <g id="Container">
          <path d={svgPaths.p26ad4c00} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(19,127,236,0.1)] relative rounded-[12px] shrink-0 size-[56px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[20px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Tecnologia Avançada</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[#617589] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">Utilizamos perfuratrizes roto-pneumáticas</p>
        <p className="mb-0">modernas e técnicas geofísicas de alta</p>
        <p className="mb-0">precisão para garantir o melhor fluxo de</p>
        <p>água.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Heading3 />
        <Container5 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[33px] relative rounded-[16px] self-stretch shrink-0 w-[389.33px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#dbe0e6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Overlay />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[21px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
        <g id="Container">
          <path d={svgPaths.p13774060} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(19,127,236,0.1)] relative rounded-[12px] shrink-0 size-[56px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container6 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[20px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">25+ Anos de Experiência</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[#617589] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">Uma trajetória sólida marcada pelo</p>
        <p className="mb-0">sucesso técnico e a satisfação contínua</p>
        <p className="mb-0">de centenas de clientes rurais, industriais</p>
        <p>e residenciais.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Heading4 />
        <Container8 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[33px] relative rounded-[16px] self-stretch shrink-0 w-[389.33px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#dbe0e6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Overlay1 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[19px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
        <g id="Container">
          <path d={svgPaths.p19ed9400} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(19,127,236,0.1)] relative rounded-[12px] shrink-0 size-[56px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[20px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Transparência Total</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[26px] not-italic relative shrink-0 text-[#617589] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">Processos claros, orçamentos detalhados</p>
        <p className="mb-0">sem custos ocultos e auxílio completo em</p>
        <p>todo o licenciamento ambiental e outorga.</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Heading5 />
        <Container11 />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[33px] relative rounded-[16px] self-stretch shrink-0 w-[389.34px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#dbe0e6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Overlay2 />
      <Container10 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-0 max-w-[1280px] px-[24px] py-[96px] right-0 top-[791px]" data-name="Section">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase w-[231px]">
        <p className="leading-[16px] whitespace-pre-wrap">Líder em Perfuração de Poços</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(19,127,236,0.2)] content-stretch flex gap-[8px] items-center px-[16px] py-[6px] relative rounded-[9999px] shrink-0 w-[279px]" data-name="Overlay+OverlayBlur">
      <div className="bg-[#137fec] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container14 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[60px] text-white tracking-[-1.5px] w-full whitespace-pre-wrap">
        <p className="leading-[60px] mb-0">Melhore sua captação</p>
        <p className="leading-[60px] mb-0">de água com quem</p>
        <p>
          <span className="font-['Inter:Black',sans-serif] font-black leading-[60px] not-italic text-[#137fec]">entende</span>
          <span className="leading-[60px]">{` do assunto!`}</span>
        </p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[28px] not-italic relative shrink-0 text-[#d1d5db] text-[20px] w-full whitespace-pre-wrap">
        <p className="mb-0">Mais de 25 anos de experiência transformando o acesso à água com</p>
        <p>tecnologia de ponta e máxima transparência para sua propriedade.</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#137fec] content-stretch flex gap-[8px] items-center justify-center pb-[17.5px] pt-[16.5px] px-[32px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.16px_0_0] rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(19,127,236,0.3),0px_8px_10px_-6px_rgba(19,127,236,0.3)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[223px]">
        <p className="leading-[28px] whitespace-pre-wrap">Solicite um Orçamento</p>
      </div>
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.pc679c40} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[7.99px] items-center justify-center px-[33px] py-[17px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container18 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[143.05px]">
        <p className="leading-[28px] whitespace-pre-wrap">Nossos Projetos</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <OverlayOverlayBlur />
      <Heading />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] max-w-[1280px] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pl-[150px] pr-[24px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[640px] items-start justify-center left-0 right-0 top-[77px]" data-name="Section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[200%] left-0 max-w-none top-[-50%] w-full" src={imgSection} />
        </div>
        <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.8)] inset-0 to-[rgba(0,0,0,0.3)]" />
      </div>
      <Container12 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[96px] justify-center leading-[48px] not-italic relative shrink-0 text-[48px] text-center text-white tracking-[-1.2px] w-[737.36px] whitespace-pre-wrap">
        <p className="mb-0">Pronto para ter sua própria fonte</p>
        <p>de água cristalina?</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[#dbeafe] text-[20px] text-center w-[751.82px] whitespace-pre-wrap">
        <p className="mb-0">Fale com nossos especialistas agora mesmo e garanta a melhor captação para</p>
        <p>sua propriedade com quem é referência no mercado.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p2aa71a00} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center justify-center px-[32px] py-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container22 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[18px] text-center w-[231.42px]">
        <p className="leading-[28px] whitespace-pre-wrap">Solicitar Orçamento Grátis</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1c483e80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f97316] content-stretch flex gap-[12px] items-center justify-center px-[32px] py-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.02px_0_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2),0px_4px_6px_-4px_rgba(0,0,0,0.2)]" data-name="Button:shadow" />
      <Container23 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[215.42px]">
        <p className="leading-[28px] whitespace-pre-wrap">Conversar no WhatsApp</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[768px] relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#137fec] relative rounded-[40px] shrink-0 w-full" data-name="Background">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[232px] py-[96px] relative w-full">
          <div className="absolute inset-0 opacity-10" data-name="Gradient" style={{ backgroundImage: "url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1232 468\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(165.52 0 0 62.876 -54824 -20826)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.009304\\'/><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'0.009304\\'/></radialGradient></defs></svg>\')" }} />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[1280px] pb-[96px] px-[24px] right-0 top-[1417px]" data-name="Section">
      <Background />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[14px] tracking-[2.8px] uppercase w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Presença Nacional</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[36px] tracking-[-0.9px] w-full">
        <p className="leading-[40px] whitespace-pre-wrap">Onde Atuamos</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[576px] relative shrink-0 w-[576px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[84px] justify-center leading-[28px] not-italic relative shrink-0 text-[#617589] text-[18px] w-[537.36px] whitespace-pre-wrap">
        <p className="mb-0">A Cristal Poços Artesianos orgulha-se de sua ampla cobertura,</p>
        <p className="mb-0">levando tecnologia de perfuração para as principais regiões do</p>
        <p>país.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Heading8 />
      <div className="bg-[#f97316] h-[4px] rounded-[9999px] shrink-0 w-[80px]" data-name="Background" />
      <Container27 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 4">
      <Container30 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[12px] tracking-[1.2px] uppercase w-[105.09px]">
        <p className="leading-[16px] whitespace-pre-wrap">Sedes Físicas</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f97316] text-[14px] w-full">
          <p className="leading-[20px] whitespace-pre-wrap">Matriz</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[18px] w-full">
          <p className="leading-[28px] whitespace-pre-wrap">Chapecó - SC</p>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#617589] text-[12px] w-full">
          <p className="leading-[16px] whitespace-pre-wrap">Santa Catarina</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#dbe0e6] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative w-full">
        <Container32 />
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#f97316] text-[14px] w-full">
          <p className="leading-[20px] whitespace-pre-wrap">Filial</p>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[18px] w-full">
          <p className="leading-[28px] whitespace-pre-wrap">Balsas - MA</p>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#617589] text-[12px] w-full">
          <p className="leading-[16px] whitespace-pre-wrap">Maranhão</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#dbe0e6] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative w-full">
        <Container35 />
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading9 />
      <Container31 />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p1f25e00} fill="var(--fill-0, #617589)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 4">
      <Container39 />
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#617589] text-[12px] tracking-[1.2px] uppercase w-[241px]">
        <p className="leading-[16px] whitespace-pre-wrap">ESTADOS QUE JÁ ATUAMOS</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[14px] w-[120.05px]">
        <p className="leading-[20px] whitespace-pre-wrap">Rio Grande do Sul</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 right-[144px] top-0" data-name="Container">
      <div className="bg-[#137fec] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[14px] w-[47.03px]">
        <p className="leading-[20px] whitespace-pre-wrap">Paraná</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[144px] right-0 top-0" data-name="Container">
      <div className="bg-[#137fec] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[14px] w-[66.91px]">
        <p className="leading-[20px] whitespace-pre-wrap">São Paulo</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 right-[144px] top-[28px]" data-name="Container">
      <div className="bg-[#137fec] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[14px] w-[66.44px]">
        <p className="leading-[20px] whitespace-pre-wrap">Tocantins</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[144px] right-0 top-[28px]" data-name="Container">
      <div className="bg-[#137fec] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[14px] w-[37.55px]">
        <p className="leading-[20px] whitespace-pre-wrap">Bahia</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 right-[144px] top-[56px]" data-name="Container">
      <div className="bg-[#137fec] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[14px] w-[40.25px]">
        <p className="leading-[20px] whitespace-pre-wrap">Ceará</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[144px] right-0 top-[56px]" data-name="Container">
      <div className="bg-[#137fec] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[14px] w-[30.42px]">
        <p className="leading-[20px] whitespace-pre-wrap">Pará</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 right-[144px] top-[84px]" data-name="Container">
      <div className="bg-[#137fec] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Container54 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[104px] relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container43 />
      <Container45 />
      <Container47 />
      <Container49 />
      <Container51 />
      <Container53 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading10 />
      <Container40 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container38 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container26 />
      <Container28 />
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f97316] relative rounded-[9999px] shrink-0 size-[16px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[16px] top-0" data-name="Overlay+Shadow" />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[16px]" data-name="Container">
      <div className="absolute bg-[#f97316] inset-0 opacity-75 rounded-[9999px]" data-name="Background" />
      <BackgroundBorder3 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[82.44%_26.44%_14.44%_70.44%] items-start" data-name="Container">
      <Container58 />
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#f97316] relative rounded-[9999px] shrink-0 size-[16px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[16px] top-0" data-name="Overlay+Shadow" />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[16px]" data-name="Container">
      <div className="absolute bg-[#f97316] inset-0 opacity-75 rounded-[9999px]" data-name="Background" />
      <BackgroundBorder4 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[33.44%_22.44%_63.44%_74.44%] items-start" data-name="Container">
      <Container60 />
    </div>
  );
}

function Container56() {
  return (
    <div className="max-w-[512px] relative self-stretch shrink-0 w-[512px]" data-name="Container">
      <div className="absolute h-[547px] left-[-107px] top-0 w-[565px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <Container57 />
      <Container59 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-end min-h-px min-w-px relative" data-name="Container">
      <Container56 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-center justify-center relative w-full">
        <Container25 />
        <Container55 />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex flex-col items-start left-0 pb-[96px] pt-[97px] px-[24px] right-0 top-[1981px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#dbe0e6] border-solid border-t inset-0 pointer-events-none" />
      <Container24 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p113ae80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#137fec] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Background">
      <Container64 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[18px] tracking-[-0.45px] w-[140.63px]">
        <p className="leading-[28px] whitespace-pre-wrap">CRISTAL POÇOS</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <Container65 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[22.75px] not-italic relative shrink-0 text-[#617589] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">Especialistas em soluções hídricas sustentáveis e de alta</p>
        <p className="mb-0">performance. Há mais de duas décadas perfurando o</p>
        <p>caminho para o seu sucesso.</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2b729200} fill="var(--fill-0, #111418)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#f6f7f8] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link">
      <Container68 />
    </div>
  );
}

function Container69() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.pf778600} fill="var(--fill-0, #111418)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#f6f7f8] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link">
      <Container69 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pt-[1.2px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col gap-[22.8px] items-start relative shrink-0 w-[410.66px]" data-name="Container">
      <Container63 />
      <Container66 />
      <Container67 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[14px] tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Empresa</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.5px] pt-[2.5px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#617589] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Sobre Nós</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.5px] pt-[2.5px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#617589] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Nossa Tecnologia</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.5px] pt-[2.5px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#617589] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Portfólio</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.5px] pt-[2.5px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#617589] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Blog</p>
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

function Container71() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading11 />
      <List />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[14px] tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Contato</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Item">
      <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #137FEC)" id="Icon" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#617589] text-[14px] w-[230.95px]">
        <p className="leading-[20px] whitespace-pre-wrap">Av. Industrial, 1200 - São Paulo, SP</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p143e1930} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#617589] text-[14px] w-[110.13px]">
        <p className="leading-[20px] whitespace-pre-wrap">(11) 99999-9999</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <Container73 />
      <Container74 />
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, #137FEC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#617589] text-[14px] w-[194.94px]">
        <p className="leading-[20px] whitespace-pre-wrap">contato@cristalpocos.com.br</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <Container75 />
      <Container76 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item4 />
      <Item5 />
      <Item6 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading12 />
      <List1 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-[616px]" data-name="Container">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container61() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between max-w-[inherit] px-[24px] py-[48px] relative w-full">
        <Container62 />
        <Container70 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#dbe0e6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center max-w-[inherit] pb-[32px] pt-[33px] px-[24px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#617589] text-[12px] text-center w-[529.88px]">
            <p className="leading-[16px] whitespace-pre-wrap">© 2024 Cristal Poços Artesianos. Todos os direitos reservados. CNPJ: 00.000.000/0000-00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pt-px right-0 top-[2686px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#dbe0e6] border-solid border-t inset-0 pointer-events-none" />
      <Container61 />
      <HorizontalBorder />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[30px] text-center w-[59.59px]">
        <p className="leading-[36px] whitespace-pre-wrap">25+</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#617589] text-[14px] text-center w-[112.75px]">
        <p className="leading-[20px] whitespace-pre-wrap">Anos de História</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container78 />
        <Container79 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[30px] text-center w-[81.11px]">
          <p className="leading-[36px] whitespace-pre-wrap">1.5k+</p>
        </div>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#617589] text-[14px] text-center w-[121.97px]">
          <p className="leading-[20px] whitespace-pre-wrap">Poços Perfurados</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#dbe0e6] border-l border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-px relative w-full">
        <Container80 />
        <Container81 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[30px] text-center w-[87.55px]">
          <p className="leading-[36px] whitespace-pre-wrap">100%</p>
        </div>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#617589] text-[14px] text-center w-[82.22px]">
          <p className="leading-[20px] whitespace-pre-wrap">Legalizados</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#dbe0e6] border-l border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-px relative w-full">
        <Container82 />
        <Container83 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[30px] text-center w-[59.48px]">
          <p className="leading-[36px] whitespace-pre-wrap">24h</p>
        </div>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#617589] text-[14px] text-center w-[112.08px]">
          <p className="leading-[20px] whitespace-pre-wrap">Suporte Técnico</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#dbe0e6] border-l border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-px relative w-full">
        <Container84 />
        <Container85 />
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[16px] items-start justify-center left-[152px] p-[33px] right-[152px] rounded-[16px] top-[-48px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#dbe0e6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Overlay+Shadow" />
      <Container77 />
      <VerticalBorder />
      <VerticalBorder1 />
      <VerticalBorder2 />
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute h-[74px] left-0 right-0 top-[717px]" data-name="Margin">
      <BackgroundBorder5 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[54px]" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[14px] w-[90.27px]">
        <p className="leading-[20px] whitespace-pre-wrap">Início</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[14px] w-[96px]">
        <p className="leading-[20px] whitespace-pre-wrap">Quem somos</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[14px] w-[85px]">
        <p className="leading-[20px] whitespace-pre-wrap">Serviços</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[14px] w-[53.8px]">
        <p className="leading-[20px] whitespace-pre-wrap">Contato</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Nav">
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container87() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p143e1930} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[102px]">
        <p className="leading-[20px] whitespace-pre-wrap">Plantão 24h</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#f97316] content-stretch flex gap-[7.99px] items-center px-[20px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.26px_0_0] rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(249,115,22,0.2),0px_4px_6px_-4px_rgba(249,115,22,0.2)]" data-name="Button:shadow" />
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[99px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pl-[160px] pr-[124px] py-[16px] relative size-full">
          <div className="h-[68px] relative shrink-0 w-[104px]" data-name="Cristal Logo.jpg 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCristalLogoJpg1} />
          </div>
          <Nav />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute backdrop-blur-[4px] bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col h-[99px] items-start left-0 pb-px right-0 top-0" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#dbe0e6] border-b border-solid inset-0 pointer-events-none" />
      <Container86 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[3100px] min-h-[3100px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
      <Margin />
      <Header />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#f6f7f8] content-stretch flex flex-col items-start relative size-full" data-name="HOME">
      <Container />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#111418] text-[16px] w-[15.5px]">
        <p className="leading-[24px] whitespace-pre-wrap">```</p>
      </div>
    </div>
  );
}