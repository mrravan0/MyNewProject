const Cancel = ({ colorInfo }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1978_458)">
                <path d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16"
                    stroke={colorInfo ? '#000' : '#fff'}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                <circle cx="12" cy="12" r="11.25"
                    stroke={colorInfo ? '#000' : '#fff'}
                    strokeWidth="1.5" />
            </g>
            <defs>
                <clipPath id="clip0_1978_458">
                    <rect width="24" height="24"
                        fill={colorInfo ? '#000' : '#fff'} />
                </clipPath>
            </defs>
        </svg>
    )
}
export default Cancel;