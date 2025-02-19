import { Route, Routes, useLocation } from "react-router";
import { lazy, Suspense, useEffect, useRef } from "react";
import "./App.css";
import { Loader } from "./UI/Loader/Loader";
import Header from "./Components/Header/Header";

const LazyAuthrozation = lazy(
	() => import("./routes/Auth/Authorization/Authorization"),
);
const LazyLogMe = lazy(() => import("./routes/Auth/Logme/Logme"));
const LazyRegMe = lazy(() => import("./routes/Auth/Regme/Regme"));

const LazyModules = lazy(() => import("./routes/HR/Modules"));
const LazyContracts = lazy(() => import("./routes/HR/Contracts/Contracts"));

const LazyCreateContracts = lazy(
	() => import("./routes/HR/Contracts/Create/CreateContracts"),
);
const LazyShowContracts = lazy(
	() => import("./routes/HR/Contracts/Show/ShowContracts"),
);
// const LazyOrgcard = lazy(() => import("./routes/Orgcard/Orgcard"));
function App() {
	const location = useLocation();

	useEffect(() => {
		if (
			location.pathname === "/auth/logme" ||
			location.pathname === "/auth/regme"
		) {
			document.querySelector(".section-offset")?.classList.add("main-bg");
		} else {
			document.querySelector(".section-offset")?.classList.remove("main-bg");
		}
	}, [location.pathname]);
	return (
		<>
			<Header />
			<main className="section-offset">
				<div className="container">
					<div className="app__content">
						<Suspense fallback={<Loader />}>
							<Routes>
								<Route path="/modules" element={<LazyModules />} />
								<Route
									path="/modules/hr/submodules"
									element={<LazyModules />}
								/>
								{/* Contracts */}
								<Route
									path="/modules/hr/contracts"
									element={<LazyContracts />}
								/>
								<Route
									path="/modules/hr/create"
									element={<LazyCreateContracts />}
								/>
								<Route
									path="hr/contracts/show/:id"
									element={<LazyShowContracts />}
								/>

								{/* Main route */}
								<Route path="/" element={<LazyAuthrozation />} />
								{/* Authorization */}
								<Route path="/auth" element={<LazyAuthrozation />}>
									<Route path="regme" element={<LazyRegMe />} />
									<Route path="logme" element={<LazyLogMe />} />
								</Route>
								{/* Error page */}
								<Route path="*" element={<h2>Страница не существует</h2>} />
							</Routes>
						</Suspense>
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
