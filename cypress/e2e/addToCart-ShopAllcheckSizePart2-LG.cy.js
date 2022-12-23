const getIframeDocument = () => {
  return cy
  .get('iframe#attentive_creative')
  .its('0.contentDocument').should('exist');
}

const getIframeBody = () => {
  // get the document
  return getIframeDocument()
  .its('body').should('not.be.undefined')
  .then(cy.wrap);
}

const url = '/collections/seamless-underwear/products.json?limit=200';

let skus = []
const pdpName = []
/*
describe(`Grab all the pdp SKU and Array of pdps`, () => {
    it(`Grabs data from ${url}`, () =>{
        cy.request({
            method: 'GET',
            url: url,
            followRedirect: false,
            headers: {
                'accept': 'application/json'
            }
        })
        .then((response) => {
            // Parse JSON the body.
            let newData = response.body.products;

            for(let pdp of newData){
                // if(pdp.tags.includes('#Sale')){
                    skus.push(pdp.id)
                    pdpName.push('/products/' + pdp.handle)
                // }
            }
        });
    })    
});

describe('Data is in console log', () => {
    it('copy and past data if prefer', () => {

            console.log('-------------------------------------')
            console.log(JSON.stringify(skus))
            console.log(JSON.stringify(pdpName) )
            console.log('-------------------------------------')
    })
})
*/

function grabHrefCollection(){

    let link = []
    const getHref = document.querySelectorAll('.proFeaturedImage')
    for(let el of getHref){
        const href = el.getAttribute('href')
        link.push(href)
    }    

    console.log(JSON.stringify(link))
}

// on sale
const pdps = ["/products/reptile-stripe-mesh-bralette","/products/reptile-stripe-mesh-brief","/products/castle-wall-support-bralette","/products/castle-wall-brief-panties","/products/nude-bralette","/products/nude-bikini-panties","/products/black-bralette","/products/black-brief-panties","/products/exotic-botanical-bralette","/products/brick-dust-tank","/products/piki-bralette","/products/piki-brief","/products/piki-high-cut","/products/black-seamless-sheer-bralette","/products/black-seamless-tank-top","/products/picnic-rose-bralette","/products/picnic-rose-highwaisted","/products/ocean-depths-eco-silk-blouse","/products/ocean-depths-eco-silk-shorts","/products/ocean-depths-eco-silk-pants","/products/spotted-panther-bralette","/products/spotted-panther-brief","/products/castle-wall-highwaisted","/products/castle-wall-thong","/products/cactus-eco-silk-slip-dress","/products/cactus-eco-silk-tank-top","/products/cactus-eco-silk-shorts","/products/blue-opal-seamless-tank","/products/blue-opal-bralette","/products/castle-wall-eco-silk-tank-top","/products/castle-wall-eco-silk-blouse","/products/castle-wall-eco-silk-shorts","/products/brush-washable-eco-silk-slip-dress","/products/brush-eco-silk-blouse","/products/brush-eco-silk-pants","/products/fallen-rock-seamless-tank-top","/products/blue-iris-bralette","/products/blue-iris-brief","/products/spotted-panther-eco-silk-slip-dress","/products/spotted-panther-eco-silk-tank-top","/products/spotted-panther-eco-silk-shorts","/products/sunkissed-brief","/products/ocean-depths-bralette-bodysuit","/products/spotted-panther-bralette-bodysuit","/products/black-bodysuit","/products/white-seamless-tank","/products/white-thong-panties","/products/lime-punch-high-cut-high-waisted","/products/lime-punch-highwaisted","/products/lime-punch-brief","/products/espresso-brief","/products/picnic-rose-bikini","/products/spotted-panther-highwaisted","/products/fjord-blue-thong","/products/fjord-blue-highwaisted","/products/hyper-pink-mesh-brief","/products/hyper-pink-mesh-highwaisted","/products/lime-punch-mesh-bralette","/products/lime-punch-mesh-brief","/products/lime-punch-mesh-highwaisted","/products/grey-seamless-bralette","/products/grey-brief-panties","/products/laurel-green-cotton-bralette","/products/keepsake-lilac-bralette","/products/keepsake-lilac-high-waisted-panties","/products/keepsake-lilac-bikini-panties","/products/rose-dust-pink-thong-panties","/products/laurel-green-cotton-brief","/products/laurel-green-cotton-bikini","/products/piki-highwaisted","/products/piki-bikini","/products/coral-pink-mesh-thong-panties","/products/coral-pink-mesh-brief-panties","/products/coral-pink-mesh-high-waisted-panties","/products/caribbean-sea-mesh-thong-panties","/products/caribbean-sea-mesh-highwaisted-panties","/products/caribbean-sea-mesh-brief-panties","/products/blue-opal-cotton-bralette","/products/blue-opal-cotton-brief","/products/blue-opal-cotton-bikini","/products/black-cotton-bralette-1","/products/black-cotton-brief-panties","/products/black-cotton-bikini-panties","/products/nude-brief-panties","/products/nude-high-waisted-panties","/products/black-mesh-brief-panties","/products/lime-punch-eco-silk-scarf","/products/black-thong","/products/black-mesh-thong-panties","/products/opal-blue-thong-panties","/products/laurel-green-bralette","/products/provincial-blue-bralette","/products/blue-iris-cheeky","/products/blue-iris-highwaisted","/products/castor-grey-brief","/products/el-sabor-thong","/products/lime-punch-bikini","/products/brief-white-panties","/products/white-cheeky","/products/fallen-rock-cotton-brief-panties","/products/black-cheeky-panties","/products/fallen-rock-high-waisted-panties","/products/fallen-rock-brief-panties","/products/laurel-green-high-waisted-panties","/products/luxe-strawberry-ice-brief-panties","/products/fallen-rock-bikini","/products/fallen-rock-cotton-bralette","/products/black-high-waisted-panties","/products/high-waisted-opal-blue-panties","/products/fallen-rock-cotton-bikini-panties","/products/fallen-rock-cotton-thong-panties","/products/black-bikini-panties","/products/grey-bikini-panties","/products/grey-cheeky-panties","/products/grey-high-waisted-panties","/products/sleek-tiger-bikini","/products/grey-thong-panties","/products/white-highwaisted-thong","/products/black-high-waisted-thong","/products/cheeky-laurel-green-underwear","/products/blue-opal-bikini-panties","/products/blue-opal-high-waisted-thong","/products/dark-palm-brief","/products/raindrop-thong-panties","/products/sleek-tiger-brief","/products/sleek-tiger-highwaisted","/products/sleek-tiger-thong","/products/sunkissed-thong","/products/espresso-thong","/products/laurel-green-brief-panties","/products/brief-provincial-blue-panties","/products/fallen-rock-thong","/products/provincial-blue-thong-panties","/products/fallen-rock-cheeky","/products/nude-thong","/products/highwaisted-nude-thong","/products/nude-cheeky","/products/castor-grey-thong","/products/peach-bloom-bralette","/products/reptile-stripe-mesh-thong","/products/black-brief-panties","/products/black-high-waisted-panties","/products/black-bikini-panties","/products/black-cheeky-panties","/products/black-high-waisted-thong","/products/black-seamless-tank-top","/products/blue-opal-seamless-tank","/products/everyday-seamless-3-panties-pack","/products/brick-dust-tank"]

for( let i = Math.floor(pdps.length/2); i < pdps.length; i++){
// for( let i = 11; i < 12; i++){

    describe(`${i}. Start of test for href ${pdps[i]} and check size LG is available`, () => {

        const size = 'div.swatch-element.lg';
        it(`Visits page ${pdps[i]}`,{ scrollBehavior: false }, () => {
            cy.visit(pdps[i])
            // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
            // console.log(JSON.stringify(pdps))
        });
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            console.log('---------------------------------');
            console.log(err);
            console.log(runnable);
            console.log('---------------------------------');
            return false
        })

        it(`Click on swatch ${size}`, () => {
            cy.wait(1000);
            cy.get(`.proVariants ${size}`).then( $size => {
                
                if($size.hasClass('soldout')){
                    expect('soldout').to.equal('available')
                } 
                else if($size.hasClass('available')) {
                    expect('available').to.equal('available')
                } else {
                    throw new Error('did not see available or solout ')
                }
            });
        })        
    })
}



