import { useGetUserQuery } from "@/redux/slices/user_slice";

export default function ReviewUser(userId: any) {

    const { data, isLoading, error } = useGetUserQuery(userId.userId);
    if (error) {
        return <div>Error</div>
    }
    else if (isLoading) {
        return <div>Loading...</div>
    }
    if (data) {
        return <div className="text-xl font-bold">{data.username}</div>
    }
}