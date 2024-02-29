import StyleCard from "../StyleCard/StyleCard";
const styles = [
    {
        "style":"Casual",
        "image":"casual.png"

    }
    ,
    {
        "style":"Formal",
        "image":"formal.png"

    }
    ,
    {
        "style":"Party",
        "image":"party.png"

    }
    ,
    {
        "style":"gym",
        "image":"gym.png"

    }
]


export default function StyleBrowsing(){
    return (
        <div className="flex flex-col bg-background w-[90%] rounded-lg justify-center m-auto ">
            {/* the header text*/}
            <div className="flex flex-col justify-center items-center p-4">
                <h1 className="text-4xl font-bold font-header">BROWSE BY <br/> DRESS STYLE</h1>
            </div>

            {/* the styles */}
            <div className="flex flex-col justify-center items-center gap-y-5">
                {styles.map((style:any) => (
                    <StyleCard key={style.style} {...style} />
                ))}
            </div>


        </div>

    )
}