import { useEffect } from 'react';
import Page from '../../components/Page';
import CommanTodo from './CommanTodo';
import { dispatch } from '../../redux/store';
import { getHeaderDetail, getTitle } from '../../redux/slices/breadcrumbs';

export default function EmployeeRole() {
  useEffect(() => {
    const headerDetail = [{ title: 'EmployeeRole', path: null }];
    const title = 'Settings';
    dispatch(getHeaderDetail(headerDetail));
    dispatch(getTitle(title));
  }, []);
  return (
    <>
      <Page title="User: settings">
        <CommanTodo />
      </Page>
    </>
  );
}
