const ArrowUp = ({ color, features }) => {
    return (
        <svg
            width={features.width}
            height={features.height}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={features.onClick}
        >
            <path d="M7.75732 7.36666L4.45732 10.6667L3.51465 9.72399L7.75732 5.48132L12 9.72399L11.0573 10.6667L7.75732 7.36666Z" fill={color || 'black'} />
        </svg>
    )
}

export default ArrowUp;