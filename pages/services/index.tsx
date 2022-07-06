import { ServicePack } from "../../components/ServicePack";

const Services = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 w-full'>
            <ServicePack data={{
                price: 259900,
                title: "Preço Bitcoin",
                text: "Fique por dentro de tudo sobre o bitcoin e recebe as notificações sobre suas quedas e subidas!",
                registredEvents: ["BitCoin 10%", "BitCoin 20%", "BitCoin 30%"]
            }}/>      
            <ServicePack data={{
                price: 2599,
                title: "Noticias Energia",
                text: "Fique por dentro de tudo sobre o mercado de energia! Receba as principais noticias CEE, G1, Canal Energia e mais!",
                registredEvents: ["Canal Energia", "CEE", "G1"]
            }}/>     
            <ServicePack data={{
                price: 2599,
                title: "Noticias Energia",
                text: "Fique por dentro de tudo sobre o mercado de energia! Receba as principais noticias CEE, G1, Canal Energia e mais!",
                registredEvents: ["Canal Energia", "CEE", "G1"]
            }}/>     
            <ServicePack data={{
                price: 2599,
                title: "Noticias Energia",
                text: "Fique por dentro de tudo sobre o mercado de energia! Receba as principais noticias CEE, G1, Canal Energia e mais!",
                registredEvents: ["Canal Energia", "CEE", "G1"]
            }}/>     
            <ServicePack data={{
                price: 2599,
                title: "Noticias Energia",
                text: "Fique por dentro de tudo sobre o mercado de energia! Receba as principais noticias CEE, G1, Canal Energia e mais!",
                registredEvents: ["Canal Energia", "CEE", "G1"]
            }}/>     
        </div>
    )
}

export default Services;