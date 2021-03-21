import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import { getCurrentUser } from './redux/auth';
import PrivatRoute from './components/PrivatRoute';
import PublicRoute from './components/PublicRoute';
// import Test from './views/Test';

const HomeView = lazy(() => import('./views/HomeView'));
const TodosView = lazy(() => import('./views/TodosView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          {/* <Route>
            <Test />
          </Route> */}
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute path="/register" restricted redirectTo="/todos">
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/todos">
            <LoginView />
          </PublicRoute>
          <PrivatRoute path="/todos" redirectTo="/login">
            <TodosView />
          </PrivatRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}

// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurrentUser();
//   }

//   render() {
//     return (
//       <Container>
//         <AppBar />

//         <Suspense fallback={<p>Загружаем...</p>}>
//           <Switch>
//             <PublicRoute exact path="/" component={HomeView} />
//             <PublicRoute
//               path="/register"
//               restricted
//               redirectTo="/todos"
//               component={RegisterView}
//             />
//             <PublicRoute
//               path="/login"
//               restricted
//               redirectTo="/todos"
//               component={LoginView}
//             />
//             <PrivatRoute
//               path="/todos"
//               component={TodosView}
//               redirectTo="/login"
//             />
//           </Switch>
//         </Suspense>
//       </Container>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onGetCurrentUser: getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);
