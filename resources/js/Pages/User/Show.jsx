import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { USER_STATUS_CLASS_MAP, USER_STATUS_TEXT_MAP } from "@/constants.jsx";
import TasksTable from "../Task/TasksTable";
export default function Show({ auth, success, user, tasks, queryParams }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-600">
                        {`User "${user.name}"`}
                    </h2>
                    <Link
                        href={route("user.edit", user.id)}
                        className="px-3 py-1 text-white transition-all rounded shadow bg-emerald-500 hover:bg-emerald-600"
                    >
                        Edit
                    </Link>
                </div>
            }
        >
            <Head title={`User "${user.name}"`} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden text-gray-700 bg-white shadow-sm sm:rounded-lg">
                        <div>
                            <img
                                src={user.image_path}
                                alt=""
                                className="object-cover w-full h-64"
                            />
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-2 gap-1 mt-2">
                                <div>
                                    <div>
                                        <label className="text-lg font-bold">
                                            User ID
                                        </label>
                                        <p className="mt-1">{user.id}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="text-lg font-bold">
                                            User Name
                                        </label>
                                        <p className="mt-1">{user.name}</p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="text-lg font-bold">
                                            User Status
                                        </label>
                                        <p className="mt-1">
                                            <span
                                                className={
                                                    "px-2 py-1 rounded text-white " +
                                                    USER_STATUS_CLASS_MAP[
                                                        user.status
                                                    ]
                                                }
                                            >
                                                {
                                                    USER_STATUS_TEXT_MAP[
                                                        user.status
                                                    ]
                                                }
                                            </span>
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="text-lg font-bold">
                                            Created By
                                        </label>
                                        <p className="mt-1">
                                            {user.createdBy.name}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label className="text-lg font-bold">
                                            Due Date
                                        </label>
                                        <p className="mt-1">{user.due_date}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="text-lg font-bold">
                                            Create Date
                                        </label>
                                        <p className="mt-1">
                                            {user.created_at}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="text-lg font-bold">
                                    User Description
                                </label>
                                <p className="mt-1">{user.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <TasksTable
                                tasks={tasks}
                                success={success}
                                queryParams={queryParams}
                                hideUserColumn={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
