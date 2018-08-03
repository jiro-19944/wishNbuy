import Orders from 'views/Orders/Orders';
import Contact from 'views/Contact/Contact';
import ProductCat from 'views/productCat/ProductCat';
import AllProducts from 'views/AllProducts/AllProducts';
import AddProduct from 'views/AddProduct/AddProduct';
import CorpProfile from "../views/CorpProfile/CorpProfile";
import Menu from "../views/Menu/Menu";

const appRoutes = [
    { path: "/desktop", name: "Рабочий стол", id: 1, icon: "desktop", dropDown: true, openDropDown: true, icon: "dashboard-icon", component: Orders },
    { path: "/add-promotions", name: "Добавить акцию", id: 2, dropDown: true, openDropDown: true, icon: "pe-7s-plus", component: Menu},
    { path: "/your-promotions", name: "Ваши акции", id: 3, dropDown: true, openDropDown: true, icon: "icon-1", component: AddProduct },
    { path: "/orders-request", name: "Заявки на товары", id: 4, dropDown: true, openDropDown: true, icon: "sey-icon", component: AllProducts },
    { path: "/statistics-requests", name: "Статистика запросов", id: 5, dropDown: true, openDropDown: true, icon: "pe-7s-menu", component: ProductCat },
    { path: "/corp-profile", name: "Профиль компании", icon: "pe-7s-config", component: CorpProfile },
    { path: "/contact", name: "Связь с разработчиками", icon: "pe-7s-mail", component: Contact },


    // { path: "/orders", name: "Заказы", icon: "orders", count: true, component: Orders },
    // { path: "/menu", name: "Меню и товары", dropDown: true, openDropDown: true, icon: "pe-7s-plus", component: Menu},
    // { path: "/add_product", child: true, name: "Добавить товар", component: AddProduct },
    // { path: "/all_products", child: true, name: "Все товары", component: AllProducts },
    // { path: "/category", child: true, name: "Категории товаров", component: ProductCat },
    // { path: "/corp-profile", name: "Профиль компании", icon: "pe-7s-config", component: CorpProfile },
    // { path: "/contact", name: "Связь с разработчиками", icon: "pe-7s-mail", component: Contact },
    { redirect: true, path:"/", to:"/orders", name: "Orders" }
];

export default appRoutes;