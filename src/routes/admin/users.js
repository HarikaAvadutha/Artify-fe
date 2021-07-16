import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Users = lazy(() => import('../../container/pages/Users'));
const AddUser = lazy(() => import('../../container/pages/AddUsers'));
const DataTable = lazy(() => import('../../container/pages/UserListDataTable'));
const Team = lazy(() => import('../../container/pages/Team'));
const GetCollection = lazy(() => import('../../container/contact/GetCollection'));
const UserUpload = lazy(() => import('../../container/pages/UsersDashboard'));
const ArtWork = lazy(() => import('../../container/pages/ArtWork'));
const ArtWorkInfo = lazy(() => import('../../container/pages/ArtWorkInfo'));
const Dashboard = lazy(() => import('../../container/pages/Dashboard'));


const PagesRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/add-user`} component={AddUser} />
      <Route path={`${path}/dataTable`} component={DataTable} />
      <Route path={`${path}/team`} component={Team} />
      <Route path={`${path}/collection`} component={GetCollection} />
      <Route path={`${path}/upload`} component={UserUpload} />
      <Route path={`${path}/artwork`} component={ArtWork} />
      <Route path={`${path}/dashboard`} component={Dashboard} />
      <Route path={`${path}/view/artwork/:artworkID`} component={ArtWorkInfo} />
      <Route path={`${path}`} component={Users} />
    </Switch>
  );
};

export default PagesRoute;
