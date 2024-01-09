import Chance from "chance";

const chance = Chance();    


 const FakeuserData = () => {

    // console.log(chance.name({ middle: true }));
    return  chance.name({ middle: true });
};
export default FakeuserData;

