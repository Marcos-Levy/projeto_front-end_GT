export const FilterGroup = ({ title, options, inputType }) => {
    return (
        <>
            

                <div>
                    <h2 className="mb-3 font-Inter font-bold text-sm">{title}</h2>

                    <ul >
                        {options.map((i, index) => (
                            <li key={index} className="flex items-center gap-2 mb-2">
                                <input type={inputType} value={i.values} name={i.group} className="h-[22px] w-[22px] accent-primary" />
                                <label htmlFor="" className="font-Inter font-medium text-sm text-dark-gray-2">{i.text}</label>
                            </li>
                        ))

                        }

                    </ul>

                </div>
            
        </>
    );
}

