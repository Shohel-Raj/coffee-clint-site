import React from 'react';

const UpdateForm = () => {
    return (
        <>
          <form  className=" grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-5  py-10">
                <fieldset className="fieldset py-0">
                    <legend className="fieldset-legend">Name </legend>
                    <input type="text" className="input w-full" name='name' placeholder="Enter coffee name here" />
                </fieldset>

                <fieldset className="fieldset py-0">
                    <legend className="fieldset-legend">Chef </legend>
                    <input type="text" className="input w-full" name='chef' placeholder="Enter coffee chef here" />
                </fieldset>

                <fieldset className="fieldset py-0">
                    <legend className="fieldset-legend">Supplier </legend>
                    <input type="text" className="input w-full" name='supplier' placeholder="Enter coffee supplier here" />
                </fieldset>

                <fieldset className="fieldset  py-0">
                    <legend className="fieldset-legend">Taste </legend>
                    <input type="text" className="input w-full" name='taste' placeholder="Enter coffee taste here" />
                </fieldset>

                <fieldset className="fieldset py-0">
                    <legend className="fieldset-legend">Price </legend>
                    <input type="text" className="input w-full" name='price' placeholder="Enter coffee price here" />
                </fieldset>

                <fieldset className="fieldset py-0">
                    <legend className="fieldset-legend">Details </legend>
                    <input type="text" className="input w-full" name='details' placeholder="Enter coffee details here" />
                </fieldset>

                <fieldset className="fieldset py-0 md:col-span-2">
                    <legend className="fieldset-legend">Photo URL </legend>
                    <input type="url" className="input w-full" name='photo' placeholder="Enter Photo URL here" />
                </fieldset>
                <button className="btn  md:col-span-2 w-full bg-[#D2B48C]">Add Coffee</button>
            </form>   
        </>
    );
};

export default UpdateForm;