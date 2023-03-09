import { useGetCategoriesQuery } from "@/entities/Category";
import { CategorySection } from "@/widgets/CategorySection";
import {Loader} from "@/shared/ui/Loader";
import {ExoticComponent, memo, SuspenseProps} from "react";
import {useSelector} from "react-redux";
import {getUserAuthData} from "@/entities/User";
import {DeleteCategoryButton} from "@/features/DeleteCategoryById"
const MainPage = memo(() => {

    const authData = useSelector(getUserAuthData);
    const { data: categoriesData, isLoading,error, isError} = useGetCategoriesQuery();

    if (isLoading) {
        return <Loader/>;
    }

    // @ts-ignore
    if (error && error.data) {
        // @ts-ignore
        return <div>{error.data}</div>;
    }

    if(authData){
        return (
            <>
                {categoriesData.map((category) => (
                    <div>
                        <CategorySection key={category._id} category={category}/>

                        <DeleteCategoryButton categoryId={category._id}/>
                    </div>
                ))
                }
            </>
        );
    }

    return (
        <>
            Please, log in to see your tasks.
        </>
    )


});

export default MainPage;


// const categories: ICategory[] = [{
//     _id: "6405482fff6cf8525b4db93a",
//     taskCategoryName: "qeee",
//     user: {
//         _id: "64054822ff6cf8525b4db937",
//         username: "Leo",
//         role: "admin"
//     },
//     tasks: [
//         {
//             "_id": "6405485eff6cf8525b4db949",
//             "title": "My Task1",
//             "description": "This is a test task",
//             "deadlineTime": new Date("2024-03-08T09:00:00.000Z"),
//             "priority": TaskPriority.medium,
//             "user": '64054822ff6cf8525b4db937',
//             "taskCategory": '6405482fff6cf8525b4db93a'
//         },
//         {
//             "_id": "6405485eff6cf8525b4db949",
//             "title": "My Task2",
//             "description": "This is a test task",
//             "deadlineTime": new Date("2024-03-08T09:00:00.000Z"),
//             "priority": TaskPriority.low,
//             "user": '64054822ff6cf8525b4db937',
//             "taskCategory": '6405482fff6cf8525b4db93a'
//         }
//     ],
//     __v: 0
// },
//     {
//         _id: "6405482fff6cf8525b4db10a",
//         taskCategoryName: "qeee",
//         user: {
//             _id: "64054822ff6cf8525b4db937",
//             username: "Leo",
//             role: "admin"
//         },
//         tasks: [
//             {
//                 "_id": "6405485eff6cf8525b4db949",
//                 "title": "My Task",
//                 "description": "This is a test task",
//                 "deadlineTime": new Date("2024-03-08T09:00:00.000Z"),
//                 "priority": TaskPriority.medium,
//                 "user": '64054822ff6cf8525b4db937',
//                 "taskCategory": '6405482fff6cf8525b4db93a'
//             }
//         ],
//         __v: 0
//     },
// ];
//
// const [value, setValue] = useState('');
//
// const handleChange = (e: any) => {
//     setValue(e.target.value);
// }
//
//
// const options : Array<ISelectOption> = [
//     { label: "test1", value: "test1" },
//     { label: "test2", value: "test2" }
// ]
//
//
//
//
// const tasks : ITask[] = [
//     { _id: '1', taskCategory: '1', user: '1', priority: TaskPriority.low, title: 'My super task', description: 'Here is some description of my task', deadlineTime: new Date('2023-12-17T13:24:00') },
//     { _id: '2', taskCategory: '1', user: '1', priority: TaskPriority.medium, title: 'My second task', description: 'Here is some description second task', deadlineTime: new Date('2023-07-23T04:10:00') },
//     { _id: '3', taskCategory: '1', user: '1', priority: TaskPriority.high, title: 'My third task', description: 'Fuck this shit', deadlineTime: new Date('2024-01-5:56:00') }
// ];
//
// const [selectedOption, setSelectedOption] = useState<string>("");
//
// const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
//     setSelectedOption(event.target.value);
// };

// <Input  value={value} onChange={handleChange} placeholder='kek'/><br/><br/>
// <Button > lol </Button><br/><br/>
// <Select options={ options } value={selectedOption} onChange={handleSelectChange} /><br/>
// {/*<TaskCard task={tasks[1]}/>*/}
// {value}
// {selectedOption}
