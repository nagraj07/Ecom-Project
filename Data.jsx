<ul className="flex space-x-4">
    {Object.entries(groupedProducts).map(([category, subcategories]) => (
        <div className="relative inline-block space-x-4" key={category}>
            {/* Category Button */}
            <li onMouseEnter={() => setDropdownVisible(true)} onMouseLeave={() => setDropdownVisible(false)}>
                <button className="hover:text-blue-400 font-medium px-2">
                    {category} <DownOutlined className="size-3" />
                </button>
            </li>

            {/* Dropdown */}
            {isDropdownVisible && (
                <div
                    style={{
                        backgroundColor: "lightgray",
                        position: "absolute",
                        zIndex: 10,
                        border: "1px solid gray",
                    }}
                >
                    {[...subcategories].map((subcategory) => (
                        <a
                            href="#"
                            key={subcategory}
                            className="py-2 px-4 block hover:bg-lightblue-400"
                        >
                            {subcategory}
                        </a>
                    ))}
                </div>
            )}
        </div>
    ))}
</ul>






// js 


const groupedProducts = Products.reduce((acc, product) => {
    // Ensure the category exists in the accumulator
    if (!acc[product.category]) {
        acc[product.category] = new Set();
    }
    // Add the subcategory to the category
    acc[product.category].add(product.subcategory || "Miscellaneous");
    return acc;
}, {});