import { useRouter } from 'next/router';
import { usePlan } from '../../hooks/plans-hooks';

export default () => {

    const router = useRouter();
    const { id } = router.query;

    const { data: plan, isLoading } = usePlan(id as string);

    if (isLoading) {
        return (
            <div>Carregando...</div>
        )
    }

    return (
        <div>
            <h1>{plan?.name}</h1>
            <p>{plan?.description}</p>
        </div>
    )
}
