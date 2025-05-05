import UserProfile from "./multi-props/page";
import Header from "./props/page";
import DropdownList from "./ui/dropDownList";

  export default function Home() {
    return (
        <div>
            <Header title="สวัสดี คุณผู้ชาย ศุทรา" />
            <UserProfile name="ศุทรา" age={20} email="spatan3753@gmil.com" isAdmin={true} />
            <DropdownList />
        </div>
    );
  }


