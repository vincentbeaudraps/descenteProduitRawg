import React, { useEffect, useState } from "react";


const Produits = () => {

    const [allGames, setAllGames] = useState([]);

    const fetchData = () => {

        fetch("https://api.rawg.io/api/genres?key=e650e928eed24b42923dcc29e96a7559").then((res) => {
            return res.json();
        }).then((data) => {
            setAllGames(data)
        })
    }
    useEffect(() => {
        fetchData();
    }, []);

    console.log(allGames);
    return (
        <>
            <div className="flex-col my-10">
                <h1 className="text-5xl font bold text-grey-800 text-center my-10">Nos <span
                    className="text-blue-600">Produits</span></h1>


                <div className="flex justify-center items-center">
                    {/* grid is used in flex to separate as blocks */}
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
                        {
                            allGames.results?.map((Game) => (
                                <div
                                    className="">
                                    <h3 key={Game.id}
                                        className="">{Game.name}
                                    </h3>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Produits