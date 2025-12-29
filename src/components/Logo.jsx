import '../App.css'

function Logo({ width = "250px" }) {
  return (
    <svg
      width={width}
      viewBox="0 0 400 100" // Increased width to prevent clipping
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id="purple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6a00ff" />
          <stop offset="100%" stopColor="#c400ff" />
        </linearGradient>
      </defs>

      <image 
        href="/blog-logo.png" 
        x="0" 
        y="10" 
        height="80" 
        width="80" 
      />
      
      <text
        x="90"
        y="70"
        fontFamily="Brush Script MT, cursive"
        fontSize="64"
        fill="url(#purple)"
        fontWeight="600"
        letterSpacing="1px"
      >
        BigBlog
      </text>
    </svg>
  );
}

export default Logo;