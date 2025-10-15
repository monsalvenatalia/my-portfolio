import twemoji from "twemoji";

export default function Emoji({ symbol, size=24 }) {
    const emojiSvg = twemoji.parse(symbol, {
        folder: "svg", 
        ext: ".svg",
    })

    return (
        <span
            className="emoji"
            style={{ width: size, heigh: size, display: "inline-block" }}
            dangerouslySetInnerHTML={{ __html: emojiSvg }}
        />
    );
}