import React, { useState } from "react";
import Viewer3D from "./Viewer3D.jsx";

export default function EditorPage() {
  const [selectedTool, setSelectedTool] = useState(null);
  const [selectedToolOption, setSelectedToolOption] = useState(null);

  return (
    <div style={{height:"100vh",display:"flex",flexDirection:"column",background:"#111",color:"#fff"}}>
      <h2 style={{padding:"10px"}}>PLANOVA-3D Editor</h2>

      <div style={{flex:1,display:"flex"}}>
        {/* Left Tool Panel */}
        <div style={{width:"220px",background:"#222",padding:"10px"}}>
          <h3>Tools</h3>
          <button onClick={() => setSelectedTool("Drawing")}>?? Drawing Tool</button>
        </div>

        {/* Center 3D Viewport */}
        <div style={{flex:1,background:"#000"}}>
          <Viewer3D selectedToolOption={selectedToolOption} />
        </div>

        {/* Right Properties Panel */}
        <div style={{width:"280px",background:"#333",padding:"10px"}}>
          <h3>Properties</h3>
          {selectedTool === "Drawing" && (
            <div>
              <button onClick={() => setSelectedToolOption("Pencil")}>?? Pencil</button>
              {selectedToolOption?.startsWith("Pencil") && (
                <div style={{marginTop:"10px"}}>
                  <img src="/images/drawing/pencil.png" alt="Pencil" style={{width:"60px"}} />
                  <div style={{display:"flex",gap:"8px",marginTop:"10px"}}>
                    {["red","blue","green","yellow","black"].map(color => (
                      <div 
                        key={color} 
                        onClick={() => setSelectedToolOption(Pencil-)}
                        style={{
                          width:"30px",height:"30px",
                          borderRadius:"50%",
                          background:color,
                          cursor:"pointer"
                        }}
                      />
                    ))}
                  </div>
                  <button style={{marginTop:"15px"}} onClick={() => setSelectedToolOption("AI_MODE")}>
                    ?? AI MODE
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
