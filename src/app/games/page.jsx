import GamesCard from "@/components/GamesCard";


const GamesPage = async () => {

    const res = await fetch('https://www.freetogame.com/api/games')
    const gamesData = await res.json()

    // console.log(gamesData);

    return (
        <div>
            <h3 className="text-2xl font-bold mb-5">Total Games: {gamesData.length}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    gamesData.map(games => <GamesCard key={games.id} games={games} />)
                }
            </div>
        </div>
    );
};

export default GamesPage;