import React, { useState, useEffect } from "react";

const Meme = () => {
    // Env variables.
    const username = "djsnake";
    const password = "djsnake@123";

    // We are starting the state wiith the empty content
    const [memeData, setMemeData] = useState({
        text0: "",
        text1: "",
        template_id: "",
        memeImg: "https://i.imgur.com/R0x1JeT.jpeg",
    });

    // We have initialized the all the memes state as empty.
    const [allMemes, updatedMemes] = useState([]);

    // Making Api call for the data
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => updatedMemes(data.data.memes));
    }, []);

    // We are building a function to randomize the img
    let randomImg = () => {
        let random = Math.floor(Math.random() * allMemes.length);
        var randomImgData = allMemes[random].id;
        let randomUrl = allMemes[random].url;
        setMemeData((prevData) => ({
            ...prevData,
            memeImg: [randomUrl],
            template_id: [randomImgData],
        }));
    };

    // This is for the text to change
    let handleChange = (event) => {
        let { name, value } = event.target;
        setMemeData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Now were sending the data that we got to the API.
    let generateMeme = () => {
        let randomImageid = memeData.template_id[0];
        let topText = memeData.text0;
        let bottomText = memeData.text1;
        const url = `https://api.imgflip.com/caption_image?template_id=${randomImageid}&username=${username}&password=${password}&text0=${topText}&text1=${bottomText}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) =>
                setMemeData((prevData) => ({
                    ...prevData,
                    memeImg: data.data.url,
                }))
            );
    };

    return (
        <div>
            <div className="container">
                <div className="row text-area">
                    <div className="col-12 col-md-6">
                        <input
                            className="form-control form-allign"
                            type="text"
                            placeholder="First Text"
                            name="text0"
                            value={memeData.text0}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <input
                            className="form-control form-allign"
                            type="text"
                            placeholder="Second Text"
                            name="text1"
                            value={memeData.text1}
                            onChange={handleChange}
                        />
                    </div>
                    {/* Add here the another one choosing the length of the meme image */}
                    <div className="buttons col-12 text-center">
                        <button
                            onClick={generateMeme}
                            className="btn meme-button"
                        >
                            Get my meme
                        </button>
                    </div>
                    <div className="buttons col-12 text-center">
                        <button onClick={randomImg} className="btn skip-button">
                            Skip this meme
                        </button>
                    </div>
                </div>
            </div>
            <img
                src={memeData.memeImg}
                alt="MemeImage"
                className="meme-img text-center"
            />
        </div>
        // <input class="form-control" type="text" placeholder="Default input"> <button className="btn btn-secondary">Skip this meme</button>
    );
};

export default Meme;
