import Container from "../../components/Container/Container";
import sprite from "../../assets/sprite.svg";
import {
  AllOrdersWrpr,
  PaginWrpr,
  TableWrpr,
} from "../AllOrdersPage/AllOrdersPage.styled";
import {
  ActionBtn,
  AddBtn,
  BtnsWrpr,
  FilterAndAddWrpr,
  FilterWrpr,
} from "./AllProductsPage.styled";

const AllProductsPage = () => {
  const products = [
    {
      product: "Moringa",
      category: "Medicine",
      stock: "12",
      suppliers: "Square",
      price: "89.66",
    },
    {
      product: "Antibiotic 250 mg",
      category: "Heart",
      stock: "19",
      suppliers: "Acme",
      price: "34.16",
    },
    {
      product: "Headache Relief",
      category: "Head",
      stock: "09",
      suppliers: "Beximco",
      price: "53.76",
    },
    {
      product: "Pharmacy",
      category: "Hand",
      stock: "14",
      suppliers: "ACI",
      price: "28.57",
    },
    {
      product: "Magnesium",
      category: "Leg",
      stock: "10",
      suppliers: "Uniliver",
      price: "56.34",
    },
  ];

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
          <AddBtn>
            <svg width="16" height="16">
              <use href={sprite + "#icon-add"}></use>
            </svg>
            <p>Add a new product</p>
          </AddBtn>
        </FilterAndAddWrpr>
        <TableWrpr>
          <h2>All products</h2>
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
                  <th>{product.product}</th>
                  <th>{product.category}</th>
                  <th>{product.stock}</th>
                  <th>{product.suppliers}</th>
                  <th>{product.price}</th>
                  <th>
                    <BtnsWrpr>
                      <ActionBtn>
                        <svg width="16" height="16">
                          <use href={sprite + "#edit"}></use>
                        </svg>
                      </ActionBtn>
                      <ActionBtn className="delete">
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
    </Container>
  );
};

export default AllProductsPage;
