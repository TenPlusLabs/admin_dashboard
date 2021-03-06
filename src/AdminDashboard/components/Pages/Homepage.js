import React from "react";
import Main from "../Main";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar";
import "../index.css";
import Form from "./Forms/Form";
import Page from "./Pages/Page";
import Pages from "./Pages/Pages";
import Portal from "./Portal/portal";
import Media from "./Media/Media";
import Comment from "./Comment/Comment";
import Post from "./Post/Post";
import Customer from "./Customer/Customer";
import { Route, Routes } from "react-router-dom";
import Coupons from "./coupons/coupon";
import RatingReview from "./ratingReview/ratingReview";
import Subscription from "./subscription/subscription";
import PaymentPortal from "./paymentPortal/paymentPortal";
import AffilatePages from "./affilatePages/afffilatPages";
import ProductCat from "./productCatalogue/productCatalogue";
import PortalAcct from "./PortalAccount/portalAccount";
import User from "./users/users";
import ProductFixed from "./products/productFixed";
import ProductSelect from "./products/productSelect";
import ProductSub from "./products/productSub";
import ProductView from "./productCatalogue/productView";
import ContactCustomer from "./c_customer/c_customer";
import ProjectOrder from "./c_projects/project_order";
import NewProject from "./c_projects/new_projects";
import PendingProject from "./c_projects/pending_Project";
import OngoingProject from "./c_projects/ongoing_projects";
import CompProject from "./c_projects/comp_projects";
import Invoice from "./invoices/invoice";
import Links from "./links/links";
import Members from "./members/members";
import Quote from "./quotes/quote";
import Cart from "./carts/cart";
import Datatable from "./datatable";
import DatatablePage from "./datatable2";
import PostEdit from "./Post/PostEdit";
import PostView from "./Post/postView";
import NewPost from "./Post/NewPost";
import MediaEdit from "./Media/mediaEdit";
import CommentEdit from "./Comment/ReplyComments";
import ProductFixedView, { ProductSubView } from "./products/productView";
import Programs from "./programs/programs";
import EcommercePayment from "./EcommercePayment/Payment";
import DisputesPayments from "./DisputesPayment/Payment";
import PortalApplication from "./application/application";
import DisputesPortalPayments from "./paymentPortal/disputpaymentPortal";
import AffilateProductCatalogue from "./affilateProduct/AffilateProductCatalogue";
import AffilateProductView from "./affilateProduct/productView";
import AffilateActiveProduct from "./affilateProduct/affilateActiveProduct";
import AffilateSuspendedProduct from "./affilateProduct/affilateSuspendedProduct";
import DefineUserRole from "./defineRole/defineRole";
import ViewProject from "./c_projects/viewProject";
import Ecommerce_Coupons from "./e_coupon/coupon";
import EcommerceCoupons from "./e_coupon/coupon";
import Application from "./application/showApplication";

const Homepage = () => {
  return (
    <div>
      <Sidebar />
      <div className="main-content" id="main-content">
        {/* <Navbar/> */}
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="pages" element={<Pages />} />
          <Route path="page" element={<Page />} />
          <Route path="media" element={<Media />} />
          <Route path="comment" element={<Comment />} />
          <Route path="form" element={<Form />} />
          <Route path="post" element={<Post />} />
          <Route path="customer" element={<Customer />} />
          <Route path="portal" element={<Portal />} />
          <Route path="coupons" element={<Coupons />} />
          <Route path="ratings_reviews" element={<RatingReview />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="paymentPortal" element={<PaymentPortal />} />
          <Route path="affilatePages" element={<AffilatePages />} />
          <Route path="productCatalogue" element={<ProductCat />} />
          <Route path="userAccount" element={<PortalAcct />} />
          <Route path="user" element={<User />} />
          <Route path="productFixed" element={<ProductFixed />} />
          <Route path="productSelect" element={<ProductSelect />} />
          <Route path="productSub" element={<ProductSub />} />
          <Route path="c_customer" element={<ContactCustomer />} />
          <Route path="project_order" element={<ProjectOrder />} />
          <Route path="new_projects" element={<NewProject />} />
          <Route path="pending_project" element={<PendingProject />} />
          <Route path="ongoing_project" element={<OngoingProject />} />
          <Route path="completed_project" element={<CompProject />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="links" element={<Links />} />
          <Route path="members" element={<Members />} />
          <Route path="quotes" element={<Quote />} />
          <Route path="cart" element={<Cart />} />
          <Route path="dataTable" element={<Datatable />} />
          <Route path="DatatablePage" element={<DatatablePage />} />
          <Route path="/post/PostEdit" element={<PostEdit />} />
          <Route path="/post/PostView" element={<PostView />} />
          <Route path="/post/NewPost" element={<NewPost />} />
          <Route path="/media/MediaEdit" element={<MediaEdit />} />
          <Route path="/comment/commentEdit" element={<CommentEdit />} />
          <Route path="/product/productView" element={<ProductView />} />
          <Route
            path="/product/productFixedView"
            element={<ProductFixedView />}
          />
          <Route path="/product/productSubView" element={<ProductSubView />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="EcommercePayment" element={<EcommercePayment />} />
          <Route path="/DisputePayment" element={<DisputesPayments />} />
          <Route path="/application" element={<PortalApplication />} />
          <Route
            path="/DisputePortalPayment"
            element={<DisputesPortalPayments />}
          />
          <Route
            path="/AffilateProductCatalogue"
            element={<AffilateProductCatalogue />}
          />
          <Route
            path="/Affilateproduct/productView"
            element={<AffilateProductView />}
          />
          <Route
            path="/AffilateActiveProduct"
            element={<AffilateActiveProduct />}
          />
          <Route
            path="/AffilateSuspendedProduct"
            element={<AffilateSuspendedProduct />}
          />
          <Route path="/defineUserRole" element={<DefineUserRole />} />
          <Route path="/view_project" element={<ViewProject />} />
          <Route path="/e_coupons" element={<EcommerceCoupons />} />
          <Route path="/showApplication" element={<Application />} />
        </Routes>
      </div>
    </div>
  );
};

export default Homepage;
