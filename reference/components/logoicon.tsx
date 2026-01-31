const LogoIcon = () => {
    return ( 
        <div>
                  <svg 
        viewBox="0 0 110 64" 
        className="h-10" 
        aria-label="GDG Logo"
        fill="none" /* Ensure fill is none so strokes render correctly */
      >
        {/* Geometry Calculation:
          ViewBox: 128x64
          Stroke Width: 10
          Center Y: 32
          
          Left Bracket (<):
          Vertex: (28, 32)
          Top-Right End: (52, 14) -> Slope ~37 degrees
          Bottom-Right End: (52, 50)
          
          Right Bracket (>):
          Vertex: (100, 32)
          Top-Left End: (76, 14)
          Bottom-Left End: (76, 50)
        */}
        
        {/* Left Bracket (<) */}
        {/* Red: Top stroke */}
        <path 
          d="M52 14 L28 32" 
          stroke="#EA4335" 
          strokeWidth="10" 
          strokeLinecap="round" 
        />
        {/* Blue: Bottom stroke */}
        <path 
          d="M28 32 L52 50" 
          stroke="#4285F4" 
          strokeWidth="10" 
          strokeLinecap="round" 
        />

        {/* Right Bracket (>) */}
        {/* Green: Top stroke */}
        <path 
          d="M76 14 L100 32" 
          stroke="#34A853" 
          strokeWidth="10" 
          strokeLinecap="round" 
        />
        {/* Yellow: Bottom stroke */}
        <path 
          d="M100 32 L76 50" 
          stroke="#FBBC04" 
          strokeWidth="10" 
          strokeLinecap="round" 
        />
      </svg>
        </div>
     );
}
 
export default LogoIcon;