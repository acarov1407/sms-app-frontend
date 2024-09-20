import SendSMS from "../../sms/components/SendSMS";

import { User } from "../../../types/user";

interface Props {
    user: User;
    withAction?: boolean;
}
function UserCard({ user, withAction = true }: Props) {

    const { username, phone, photoURL } = user;

    return (
        <div className="rounded-md p-4 bg-gray-100 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4 flex-1">
                <img
                    className="block rounded-full h-10 w-10"
                    src={photoURL}
                    alt="user profile picture"
                />
                <div>
                    <p className="text-gray-800 font-semibold">{username}</p>
                    <p className="text-gray-600 text-sm tracking-wider">{`+${phone}`}</p>
                </div>
            </div>

            {withAction && (
                <div>
                    <SendSMS user={user} />
                </div>
            )}

        </div>
    )
}
export default UserCard;