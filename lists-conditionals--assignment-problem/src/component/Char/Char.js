import React from 'react';



const Char = (props) => {

    const COLORS = ["#995D81", "#6689A1", "#FFBA08", "#7DC95E", "#0C1713"];

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const generateRandomColor = () => {
        return COLORS[randomIntFromInterval(0, (COLORS.length - 1))];
    }

    return (
        <div style={
            {
                width: "100px",
                height: "80px",
                margin: "10px 10px 0 0",
                backgroundColor: generateRandomColor(),
                borderRadius: "12.5%"
            }
        } onClick={() => props.deleteChar(props.index)}>
            <p style={
                {
                    textAlign: "center",
                    padding: "30px",
                    margin: "0 auto",
                    color: "white",
                    fontSize: "18px"
                }
            }><strong>{props.char}</strong></p>
        </div>

    )

}
export default Char;