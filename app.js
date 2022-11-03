document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

// define types of words Create a branding for a industry in location, focusing on noun



// A factory function that accepts different parameters to return a prompt for a brand
const brandFactory = (brandName, adjectiveIndustry, industry, location, adjectiveBusinessPurpose, businessPurpose) => {
  return {
    name: brandName,
    adjectiveIndustry: adjectiveIndustry,
    industry: industry,
    location: location,
    adjectiveBusinessPurpose: adjectiveBusinessPurpose,
    businessPurpose: businessPurpose,

    specialTask() {
      // TO DO: randomize different taske
      console.log('Create a full branding suite');  
    }
  };
};

const japaneseRestaurant = brandFactory('"Mochi"', 'japanese', 'restaurant', 'Vienna', 'japanese viennese fusion', 'kitchen')
const mexicanRestaurant = brandFactory('"Fuego"', 'mexican', 'restaurant', 'Vienna', 'extra spicy', 'food')
const coiffeur = brandFactory('"Der goldene Schnitt"', '', 'coiffeur', 'Vienna', 'avantgarde', 'haircuts')
const ceramics = brandFactory('"Terrazo"', '', 'ceramics business', 'Vienna', 'organic, handmade', 'dishes')

console.log(japaneseRestaurant)

//Scramble function that selects one of the brandFactory objects
const allPrompts = [japaneseRestaurant, mexicanRestaurant, coiffeur, ceramics]

const scramble = () => {
  let random = Math.floor(Math.random() * allPrompts.length);
  console.log(random);
  return allPrompts[random]
}

const selectedBrand = scramble()

// add selected text to front end
const generator = document.getElementById('generator')
console.log(generator)

let brandPrompt = `Create a branding for a ${selectedBrand.adjectiveIndustry} ${selectedBrand.industry} named ${selectedBrand.name}, in ${selectedBrand.location}, focusing on ${selectedBrand.adjectiveBusinessPurpose} ${selectedBrand.businessPurpose}.`

generator.innerHTML = brandPrompt

});