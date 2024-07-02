import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container/Container";
import sprite from "../../assets/sprite.svg";
import {
  changeAddProductModal,
  changeDeleteProductModal,
  changeEditProductModal,
  changeModalOpen,
} from "../../redux/modals/modalsSlice";
import { selectIsModalOpen } from "../../redux/selectors";
import {
  AllOrdersWrpr,
  PaginWrpr,
  TableTitle,
  TableWrpr,
} from "../AllOrdersPage/AllOrdersPage.styled";
import {
  ActionBtn,
  AddBtn,
  BtnsWrpr,
  FilterAndAddWrpr,
  FilterWrpr,
} from "./AllProductsPage.styled";
import Modal from "../../components/Modals/Modal/Modal";

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(selectIsModalOpen);

  const products = [
    {
      productInfo: "Moringa",
      category: "Medicine",
      stock: "12",
      suppliers: "Square",
      price: "89.66",
    },
    {
      productInfo: "Antibiotic 250 mg",
      category: "Heart",
      stock: "19",
      suppliers: "Acme",
      price: "34.16",
    },
    {
      productInfo: "Headache Relief",
      category: "Head",
      stock: "09",
      suppliers: "Beximco",
      price: "53.76",
    },
    {
      productInfo: "Pharmacy",
      category: "Hand",
      stock: "14",
      suppliers: "ACI",
      price: "28.57",
    },
    {
      productInfo: "Magnesium",
      category: "Leg",
      stock: "10",
      suppliers: "Uniliver",
      price: "56.34",
    },
  ];

  const handleAddProduct = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeAddProductModal(true));
  };

  const handleEditProduct = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeEditProductModal(true));
  };

  const handleDeleteProduct = () => {
    dispatch(changeModalOpen(true));
    dispatch(changeDeleteProductModal(true));
  };

  return (
    <Container>
      <AllOrdersWrpr>
        <FilterAndAddWrpr>
          <FilterWrpr>
            <input type="text" placeholder="User Name" />
            <button>
              <svg width="14" height="14">
                <use href={sprite + "#filter"}></use>
              </svg>
              <p>Filter</p>
            </button>
          </FilterWrpr>
          <AddBtn onClick={handleAddProduct}>
            <svg width="16" height="16">
              <use href={sprite + "#icon-add"}></use>
            </svg>
            <p>Add a new product</p>
          </AddBtn>
        </FilterAndAddWrpr>
        <div>
          <TableTitle>All products</TableTitle>
          <TableWrpr>
            <table>
              <thead>
                <tr>
                  <th>Product Info</th>
                  <th>Category</th>
                  <th>Stock</th>
                  <th>Suppliers</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <th>{product.productInfo}</th>
                    <th>{product.category}</th>
                    <th>{product.stock}</th>
                    <th>{product.suppliers}</th>
                    <th>{product.price}</th>
                    <th>
                      <BtnsWrpr>
                        <ActionBtn onClick={handleEditProduct}>
                          <svg width="16" height="16">
                            <use href={sprite + "#edit"}></use>
                          </svg>
                        </ActionBtn>
                        <ActionBtn
                          className="delete"
                          onClick={handleDeleteProduct}
                        >
                          <svg width="16" height="16">
                            <use href={sprite + "#delete"}></use>
                          </svg>
                        </ActionBtn>
                      </BtnsWrpr>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrpr>
        </div>
        <PaginWrpr>
          <div>
            <span className="active"></span>
          </div>
          <div>
            <span></span>
          </div>
          <div>
            <span></span>
          </div>
          <div>
            <span></span>
          </div>
          <div>
            <span></span>
          </div>
        </PaginWrpr>
      </AllOrdersWrpr>
      {modalIsOpen && <Modal />}
    </Container>
  );
};

export default AllProductsPage;
