
const GradientText = ({ text }) => {
    return (
        <svg
            width="auto"
            height="80"
            viewBox="0 0 800 80"
        >
            <defs>
                <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#222F3D" />
                    <stop offset="25%" stopColor="#DDE6E8" />
                    <stop offset="50%" stopColor="#222F3D" />
                    <stop offset="75%" stopColor="#DDE6E8" />
                    <stop offset="100%" stopColor="#222F3D" />
                </linearGradient>
            </defs>
            <text
                x="0"
                y="60"
                fontSize="72"
                fontWeight="800"
                letterSpacing="-3px"
                textTransform="uppercase"
                fill="url(#textGradient)"
            >
                {text}
            </text>
        </svg>
    );
};

export default GradientText;
