
export default function StyleCard(style: any) {
    return (
        <div>
            <div className="flex justify-center items-center w-[350px] h-[220px] bg-background rounded-2xl m-auto">
                <img src={style.image} alt="style" />
            </div>
           
        </div>
    )
}