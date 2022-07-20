import { CreatePlanModal } from '../../components/modals/create-plans-modal';

const Plans = () => {
    return (
        <div>
           <CreatePlanModal open={true} onClose={() => {}}/>
        </div>
    )
}

export default Plans;