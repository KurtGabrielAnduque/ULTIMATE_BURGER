function ProfileHero({ sampleData }) {
    return (
        <>
            {sampleData.map((user) => {
                return (

                    <div key={user.userID} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 mb-8 flex items-center gap-5 flex-wrap">
                        <div className="relative shrink-0">
                            <div className="w-20 h-20 rounded-full bg-zinc-800 ring-4 ring-red-500 flex items-center justify-center">
                                <span className="text-2xl font-extrabold text-white">KA</span>
                            </div>
                            <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-zinc-900" />
                        </div>
                        <div className="flex-grow min-w-0">
                            <h1 className="text-2xl font-extrabold text-white truncate">{`${user.FirstName} ${user.LastName}`}</h1>
                            <p className="text-zinc-400 text-sm truncate">{user.Email}</p>
                        </div>
                        <span className="shrink-0 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                            {user.Status}
                        </span>
                    </div>

                );
            })}
        </>
    )
}

export default ProfileHero