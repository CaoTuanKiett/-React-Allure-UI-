import "./DefaultLayout.scss";

import Head from "../../component/shared/head/Head";
import SideBar from "../../component/shared/sideBar/SideBar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  return (
    <div className="defaultLayout">
      <Head />
      <div className="defaultLayout-body">
        <div className="layout-sidebar">
          <SideBar />
        </div>
        <div className="layout-children">{props.children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
