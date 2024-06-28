const SideScroll = () => {
  return (
    <div
    id="scroll-1"
    className="flex-item-left scrollFade"
    style={{ flex: "30%" }}
  >
    <h1
      id="scroll-arkco-1"
      style={{
        position: "fixed",
        writingMode: "vertical-lr",
        fontSize: "6vmax",
        color: "#F7931E",
        transform: "rotate(180deg)",
        left: "5%",
        top: "5%",
      }}
    >
      Allen Azarkian
    </h1>
    <div
      id="about-header-desktop"
      style={{ position: "fixed", top: "45%", left: "2%" }}
    >
      <div style={{ transform: "rotate(-90deg)" }}>
        <h1 style={{ fontSize: "1.5vmax", margin: "-15px 0" }}>
          Founder/CEO, RA, AIA, Principal Architect
        </h1>
      </div>
    </div>
    <div id="about-header-mobile" style={{ marginTop: "10vh" }}>
      <h1 style={{ fontSize: "6vmax", color: "#F7931E" }}>
        Allen Azarkian
      </h1>
      <h1 style={{ fontSize: "2vmax" }}>
        Founder/CEO, RA, AIA, Principal Architect
      </h1>
    </div>
  </div>
  )
}

export default SideScroll