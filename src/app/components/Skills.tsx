import Card from "./Cards";

export default function Home() {
    const tarjeta = {
        title: "HTML",
        imageUrl: "https://drive.google.com/file/d/1WhQXbcKgqruX03YCzC0Kw-m5CDyRnjyo/view?usp=drive_link", // Ruta a tu imagen
        description: "HyperText Markup Language ",
    };

    const tarjeta1 = {
        title: "CSS",
        imageUrl: "https://drive.google.com/file/d/181VrsTTjXIV1aFkQYhvoHmCwD2c9mIf9/view?usp=drive_link", // Ruta a tu imagen
        description: "Cascading Style Sheets",
    };

    const tarjeta2 = {
        title: "JavaScript",
        imageUrl: "https://drive.google.com/file/d/1fj8M26mgw4rvWfTeUQUjjY739L0XtyaI/view?usp=drive_link", // Ruta a tu imagen
        description: "Lenguaje de programacion",
    };

    const tarjeta3 = {
        title: "Wordpress",
        imageUrl: "https://drive.google.com/file/d/1D2j6Nu4i4MYiQZbqpH9PAE4rzf1DfNwF/view?usp=drive_link", // Ruta a tu imagen
        description: "Creacion de sitios web",
    };

    const tarjeta4 = {
        title: "Photoshop",
        imageUrl: "https://drive.google.com/file/d/1JgkeCUyBBv-MDs-BG2Usu-z9CY_35HVJ/view?usp=drive_link", // Ruta a tu imagen
        description: "Edicion y creacion de fotos",
    };

    const tarjeta5 = {
        title: "CANVA",
        imageUrl: "https://drive.google.com/file/d/1nSOiOb40UCBRJCu4u45jYjXYhB4VlOsN/view?usp=drive_link", // Ruta a tu imagen
        description: "Diseño de contenidos",
    };

    const tarjeta6 = {
        title: "Reaper DAW",
        imageUrl: "https://drive.google.com/file/d/1yu4Gc3UNOE4hYwH8piRzRI3X-BGAE8R5/view?usp=drive_link", // Ruta a tu imagen
        description: "Produccion Audiovisual",
    };

    const tarjeta7 = {
        title: "Sony Vegas",
        imageUrl: "https://drive.google.com/file/d/1P9TaTcjm5VJOxmPxkRQu5lMZq-1RdKeZ/view?usp=drive_link", // Ruta a tu imagen
        description: "Produccion Visual",
    };

    const tarjeta8 = {
        title: "NextJS & ReactJS",
        imageUrl: "https://drive.google.com/file/d/1dRkiceSAEqSOpXPynEILP_QjBoJQGAuG/view?usp=drive_link", // Ruta a tu imagen
        description: "Framework Libreria",
    };

    const tarjeta9 = {
        title: "Bootstrap",
        imageUrl: "https://drive.google.com/file/d/1k18txVGxrGPj4kDyDQlerGTQVSTeGOjL/view?usp=drive_link", // Ruta a tu imagen
        description: "Framework Libreria",
    };
    const tarjeta10 = {
        title: "Microsoft Word & Excel",
        imageUrl: "https://drive.google.com/file/d/1On_OSsDgvj1xcqQdNNwi-jIs51Nto7va/view?usp=drive_link", // Ruta a tu imagen
        description: "Paquete de programas office",
    };
    const tarjeta11 = {
        title: "GitHub",
        imageUrl: "https://drive.google.com/file/d/1oXQAGxzTku3Ggu1JMcQ_m3qFOwzZrIFp/view?usp=drive_link", // Ruta a tu imagen
        description: "Control de versiones",
    };

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Card
                            title={tarjeta.title}
                            imageUrl={tarjeta.imageUrl}
                            description={tarjeta.description}
                        />
                    </div>

                    <div className="col-md-4">
                        <Card
                            title={tarjeta1.title}
                            imageUrl={tarjeta1.imageUrl}
                            description={tarjeta1.description}
                        />
                    </div>

                    <div className="col-md-4">
                        <Card
                            title={tarjeta2.title}
                            imageUrl={tarjeta2.imageUrl}
                            description={tarjeta2.description}
                        />
                    </div>

                    <div className="col-md-4">
                        <Card
                            title={tarjeta3.title}
                            imageUrl={tarjeta3.imageUrl}
                            description={tarjeta3.description}
                        />
                    </div>

                    <div className="col-md-4">
                        <Card
                            title={tarjeta4.title}
                            imageUrl={tarjeta4.imageUrl}
                            description={tarjeta4.description}
                        />
                    </div>

                    <div className="col-md-4">
                        <Card
                            title={tarjeta5.title}
                            imageUrl={tarjeta5.imageUrl}
                            description={tarjeta5.description}
                        />
                    </div>

                    <div className="col-md-4">
                        <Card
                            title={tarjeta6.title}
                            imageUrl={tarjeta6.imageUrl}
                            description={tarjeta6.description}
                        />
                    </div>

                    <div className="col-md-4">
                        <Card
                            title={tarjeta7.title}
                            imageUrl={tarjeta7.imageUrl}
                            description={tarjeta7.description}
                        />
                    </div>

                    <div className="col-md-4">
                        <Card
                            title={tarjeta8.title}
                            imageUrl={tarjeta8.imageUrl}
                            description={tarjeta8.description}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title={tarjeta9.title}
                            imageUrl={tarjeta9.imageUrl}
                            description={tarjeta9.description}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title={tarjeta10.title}
                            imageUrl={tarjeta10.imageUrl}
                            description={tarjeta10.description}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title={tarjeta11.title}
                            imageUrl={tarjeta11.imageUrl}
                            description={tarjeta11.description}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
