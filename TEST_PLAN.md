1. Overview & Scope

Website Under Test: Demo e-commerce site with login, inventory, cart, and checkout.

Scope:

Login: valid users, locked users, empty fields, non-existing users
Inventory: view products, open product details, filter & sort
Cart: add/remove items, icon count, persistence across navigation
Checkout: fill user info, validate error messages, total price calculation, back & continue flow
Navigation: logout, access to protected pages

2. Test Cases

### Login Tests
| Test ID | Description | Steps | Expected Result | Priority |
|---------|------------|-------|----------------|----------|
| LOGIN-01 | Validate success login with valid user | 1. Open login page 2. Enter valid username and password 3. Click login | Inventory page loads successfully | High |
| LOGIN-02 | Locked out user cannot login | 1. Open login page 2. Enter locked_out_user credentials 3. Click login | Error message for locked out user appears | High |
| LOGIN-03 | Login with empty username | 1. Open login page 2. Leave username empty, enter password 3. Click login | Error message for empty username appears | Medium |
| LOGIN-04 | Login with empty password | 1. Open login page 2. Enter username, leave password empty 3. Click login | Error message for empty password appears | Medium |
| LOGIN-05 | Login with empty username and password | 1. Open login page 2. Leave username and password empty 3. Click login | Error message for empty username appears | Medium |
| LOGIN-06 | Login with non-existing user | 1. Open login page 2. Enter non-existing username and valid password 3. Click login | Error message for invalid credentials appears | Medium |

---

### Inventory Tests
| Test ID | Description | Steps | Expected Result | Priority |
|---------|------------|-------|----------------|----------|
| INV-01 | Add single product to cart | 1. Open inventory page 2. Add first product to cart | Cart icon shows 1 product, product appears in cart | High |
| INV-02 | Add multiple products to cart | 1. Add three products to cart 2. Open cart | Cart icon shows 3 products, all products appear in cart | High |
| INV-03 | Add and remove products from cart | 1. Add two products 2. Open cart 3. Remove first product | Cart icon and items count updated correctly | High |
| INV-04 | Validate cart is empty | 1. Open cart page | Cart is empty | Medium |
| INV-05 | Products remain in cart after navigating back and forth | 1. Add product to cart 2. Open product page 3. Navigate back to inventory 4. Open cart | Product remains in cart | Medium |
| INV-06 | Open product details from cart | 1. Add product to cart 2. Open product details from cart | Product page loads correctly | Medium |

---

### Shopping Cart Tests
| Test ID | Description | Steps | Expected Result | Priority |
|---------|------------|-------|----------------|----------|
| CART-01 | Add single product to cart | 1. Add product 2. Open cart | Cart shows product | High |
| CART-02 | Add multiple products to cart | 1. Add three products 2. Open cart | All products appear in cart | High |
| CART-03 | Add and remove products | 1. Add two products 2. Remove one 3. Open cart | Cart shows correct count | High |
| CART-04 | Validate cart is empty | 1. Open cart page | Cart is empty | Medium |
| CART-05 | Products remain after navigating back and forth | 1. Add product 2. Open product page 3. Go back 4. Open cart | Product still in cart | Medium |
| CART-06 | Open product details from cart | 1. Add product 2. Open product details from cart | Product page loads | Medium |

---

### Checkout Tests
| Test ID | Description | Steps | Expected Result | Priority |
|---------|------------|-------|----------------|----------|
| CHECK-01 | Successful checkout | 1. Add product 2. Open cart 3. Checkout 4. Fill user info 5. Continue 6. Finish | Checkout completes successfully | High |
| CHECK-02 | Missing first name | 1. Add product 2. Checkout 3. Leave first name empty 4. Continue | Error message for empty first name | High |
| CHECK-03 | Missing last name | 1. Add product 2. Checkout 3. Leave last name empty 4. Continue | Error message for empty last name | High |
| CHECK-04 | Missing postal code | 1. Add product 2. Checkout 3. Leave postal code empty 4. Continue | Error message for empty postal code | High |
| CHECK-05 | Validate total price for multiple products | 1. Add multiple products 2. Checkout 3. Fill user info 4. Continue | Total price calculated correctly | Medium |
| CHECK-06 | Navigate back and continue checkout | 1. Add product 2. Checkout 3. Cancel 4. Continue shopping 5. Checkout again | Checkout completes successfully | Medium |

---

### Navigation Tests
| Test ID | Description | Steps | Expected Result | Priority |
|---------|------------|-------|----------------|----------|
| NAV-01 | User can logout successfully | 1. Login 2. Open menu 3. Click logout | Redirected to login page | High |
| NAV-02 | Navigation menu displays all options | 1. Open inventory page 2. Open menu | All expected menu options are visible | Medium |
| NAV-03 | User cannot access inventory page after logout | 1. Logout 2. Try to open inventory page | Redirected to login page | High |
| NAV-04 | User can navigate back to inventory from product page | 1. Open product page 2. Navigate back | Inventory page loads correctly | Medium |
| NAV-05 | User can navigate to About page | 1. Open menu 2. Click About | About page loads correctly | Medium |
| NAV-06 | Reset app state clears cart | 1. Add product 2. Reset app state | Cart is empty | Medium |

3. Out of Scope
Performance or load testing
Payment gateway integration
Cross-browser compatibility beyond Chrome, Firefox, Safari
Detailed UI/UX testing beyond element visibility
Backend API validations

4. Risks & Summary

Risks:

HTML structure changes may break tests
Limited user data for edge cases
Price/product content may change, requiring test updates

Summary:

Coverage includes login, inventory, cart, checkout, and navigation
Smoke tests cover critical flows
Regression tests cover edge cases and error scenarios