import beach from './assets/beach-work.jpg';
import PropertyCard from './components/DestinationCard';

function App() {
    const popularDestinations = [
        {
            city: 'Toronto',
            averagePrice: 120,
            propertyCount: 76,
            imageUrl:
                'https://images.unsplash.com/photo-1565717989187-2c914e866ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
            imageAlt: 'Toronto skyline',
        },
        {
            city: 'Malibu',
            averagePrice: 215,
            propertyCount: 43,
            imageUrl:
                'https://images.unsplash.com/photo-1499958294884-ad8146fea89d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
            imageAlt: 'Cliff in malibu',
        },
        {
            city: 'Chicago',
            averagePrice: 130,
            propertyCount: 115,
            imageUrl:
                'https://images.unsplash.com/photo-1550676224-f5a1e8b6e15f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
            imageAlt: 'Chicago skyline',
        },
        {
            city: 'Seattle',
            averagePrice: 135,
            propertyCount: 63,
            imageUrl:
                'https://images.unsplash.com/photo-1560448076-213180fe7d44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
            imageAlt: 'Seattle skyline',
        },
        {
            city: 'Miami',
            averagePrice: 115,
            propertyCount: 86,
            imageUrl:
                'https://images.unsplash.com/photo-1571042804889-1438b1d607a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
            imageAlt: 'Miami beach',
        },
        {
            city: 'Colorado',
            averagePrice: 85,
            propertyCount: 47,
            imageUrl:
                'https://images.unsplash.com/photo-1611965569186-2505e4dbecb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
            imageAlt: 'Colorado mountain',
        },
    ];
    return (
        <div className="bg-gray-300">
            <div className="flex bg-gray-100">
                <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:w-1/2 lg:max-w-full lg:py-24 lg:px-12">
                    <div className="xl:max-w-lg xl:ml-auto">
                        <svg className="h-10" viewBox="0 0 185 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M121.09 28.336c2.352 0 4.392-1.248 5.424-3.12l-2.688-1.536c-.48.984-1.512 1.584-2.76 1.584-1.848 0-3.216-1.368-3.216-3.264 0-1.92 1.368-3.288 3.216-3.288 1.224 0 2.256.624 2.736 1.608l2.664-1.56c-.984-1.848-3.024-3.096-5.376-3.096-3.648 0-6.336 2.76-6.336 6.336 0 3.576 2.688 6.336 6.336 6.336zM137.084 16v1.416c-.864-1.08-2.16-1.752-3.912-1.752-3.192 0-5.832 2.76-5.832 6.336 0 3.576 2.64 6.336 5.832 6.336 1.752 0 3.048-.672 3.912-1.752V28h3.096V16h-3.096zm-3.336 9.384c-1.896 0-3.312-1.368-3.312-3.384s1.416-3.384 3.312-3.384c1.92 0 3.336 1.368 3.336 3.384s-1.416 3.384-3.336 3.384zM149.851 18.976V16h-2.712v-3.36l-3.096.936V16h-2.088v2.976h2.088v4.992c0 3.24 1.464 4.512 5.808 4.032v-2.808c-1.776.096-2.712.072-2.712-1.224v-4.992h2.712zM153.57 14.56c1.056 0 1.92-.864 1.92-1.896s-.864-1.92-1.92-1.92c-1.032 0-1.896.888-1.896 1.92s.864 1.896 1.896 1.896zM152.034 28h3.096V16h-3.096v12zM163.676 28.336c3.528 0 6.36-2.76 6.36-6.336 0-3.576-2.832-6.336-6.36-6.336-3.528 0-6.336 2.76-6.336 6.336 0 3.576 2.808 6.336 6.336 6.336zm0-3.024c-1.824 0-3.24-1.368-3.24-3.312 0-1.944 1.416-3.312 3.24-3.312 1.848 0 3.264 1.368 3.264 3.312 0 1.944-1.416 3.312-3.264 3.312zM178.886 15.664c-1.608 0-2.856.6-3.576 1.68V16h-3.096v12h3.096v-6.48c0-2.088 1.128-2.976 2.64-2.976 1.392 0 2.376.84 2.376 2.472V28h3.096v-7.368c0-3.192-1.992-4.968-4.536-4.968z"
                                fill="#667EEA"
                            />
                            <path
                                d="M61.063 28h3.768l3.144-11.088L71.143 28h3.768l4.704-16.8h-3.48L72.92 23.656 69.391 11.2H66.56l-3.504 12.456L59.84 11.2h-3.48L61.063 28zM85.674 28.336c3.528 0 6.36-2.76 6.36-6.336 0-3.576-2.832-6.336-6.36-6.336-3.528 0-6.336 2.76-6.336 6.336 0 3.576 2.808 6.336 6.336 6.336zm0-3.024c-1.824 0-3.24-1.368-3.24-3.312 0-1.944 1.416-3.312 3.24-3.312 1.848 0 3.264 1.368 3.264 3.312 0 1.944-1.416 3.312-3.264 3.312zM97.308 18.064V16h-3.096v12h3.096v-5.736c0-2.52 2.04-3.24 3.648-3.048V15.76c-1.512 0-3.024.672-3.648 2.304zM113.831 28l-4.968-6.072L113.687 16h-3.696l-4.128 5.28V11.2h-3.096V28h3.096v-5.448L110.231 28h3.6z"
                                fill="#2D3748"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M43.911 12.604L36.213 8.16v20.645h9v2h-44v-2h4v-12.72l-3.728.933L1 15.078l21.09-5.273h3.122a9.552 9.552 0 0 0-.68 2.559l-.483 3.975 5.164-2.982v15.448h5V8.161l-7.696 4.444a7.502 7.502 0 0 1 2.565-4.8h-4.12a7.489 7.489 0 0 1 6.646-2.973l-5.591-3.228a7.488 7.488 0 0 1 6.696.402c1.039.6 1.88 1.41 2.5 2.347a7.461 7.461 0 0 1 2.5-2.347 7.49 7.49 0 0 1 6.698-.402l-5.593 3.228a7.488 7.488 0 0 1 6.646 2.973h-4.12a7.498 7.498 0 0 1 2.567 4.8zM25.213 28.805v-10h-6v10h6zm-11-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
                                fill="#667EEA"
                            />
                        </svg>
                        <img
                            className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
                            src={beach}
                            alt="Woman workactioning on the beach"
                        />
                        <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:text-4xl sm:mt-8 lg:text-3xl xl:text-4xl">
                            You can work from anywhere.
                            <br className="inline" />
                            <span className="text-indigo-500">Take advantage of it.</span>
                        </h1>
                        <p className="mt-2 text-gray-600 sm:text-xl sm:mt-4">
                            Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're
                            not on vacation.
                        </p>
                        <div className="mt-4 sm:mt-6">
                            <a className="btn btn-indigo sm:text-base shadow-lg" href="#">
                                Book your escape
                            </a>
                            <a className="btn btn-gray sm:text-base ml-2" href="#">
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2 lg:relative">
                    <img className="absolute inset-0 h-full w-full object-cover object-center" src={beach} alt="Woman workactioning on the beach" />
                </div>
            </div>
            <div>
                <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
                    <h2 className="text-xl text-gray-900">Popular Destinations</h2>
                    <p className="text-gray-600">A selection of great work-friendly cities </p>
                    <div className="flex flex-wrap -mx-4">
                        {popularDestinations.map((l) => (
                            <PropertyCard key={l.city} {...l} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
