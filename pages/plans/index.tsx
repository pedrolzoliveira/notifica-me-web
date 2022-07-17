import { ServicePack } from '../../components/service-pack';
import { usePlans } from '../../hooks/plans-hooks';

const Services = () => {

    const { data: plans } = usePlans();

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 w-full'>
            {
                plans?.map(plan => {
                    return <ServicePack data={{
                        id: plan.id,
                        name: plan.name,
                        description: plan.description,
                        price: plan.price,
                        registredEvents: []
                    }}
                    />
                })
            }
        </div>
    )
}

export default Services;
