const ExibidorFilme = ({ filme }) => {

    return (
        <>
            <iframe
                width="560"
                height="315"
                src={filme.link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
            <h2>{filme.titulo}</h2>
        </>
    );
}

export default ExibidorFilme;