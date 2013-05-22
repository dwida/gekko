var config = {};

// Gekko currently only supports Exponential Moving Averages
config.tradingMethod =  'Exponential Moving Averages';

// On trades at which exchange should Gekko base its analysis on?
config.watch =  {
  exchange: 'mtgox', // either 'BTCe' or 'MtGox'

  // if you filled in BTCe uncomment and fill in the following
  // currency: 'USD' // either USD, EUR or RUR
} 

// Exponential Moving Averages settings:
config.EMA = {
  // timeframe per candle
  interval: 60, // in minutes
  // EMA weight (α)
  // the higher the weight, the more smooth (and delayed) the line 
  shortEMA: 10,
  longEMA: 21,
  // amount of samples to remember and base initial EMAs on
  candles: 100,
  // max difference between first and last trade to base price calculation on
  sampleSize: 10, // in seconds
  // the difference between the EMAs (to act as triggers)
  sellTreshold: -0.25,
  buyTreshold: 0.25
};

config.debug = false; // for additional logging / debugging

//    DANGER ZONE
//    
// enable real trading BTC for real USD
//
// fill in you public and private key from mtgox or btc-e, if you enable 
// btc-e also set a currency.
//
// == if you set `enabled` to true Gekko will trade automatically! ==
config.traders = [
  {
    exchange: 'MtGox',
    key: '',
    secret: '',
    enabled: false
  },
  {
    exchange: 'BTCe',
    key: '',
    secret: '',
    currency: 'USD', // either USD, EUR or RUR
    enabled: false
  }
];
// want Gekko to send a mail on buy or sell advice?
config.mail = {
  enabled: false,
  email: '', // only works for Gmail or Google apps accounts at the moment

  // You don't have to set your password here, if you leave it blank we will ask it 
  // when Gekko's starts.
  //
  // NOTE: Gekko is an open source project < https://github.com/askmike/gekko >,
  // make sure you looked at the code or trust the maintainer of this bot when you
  // fill in your email and password.
  //
  // WARNING: If you have NOT downloaded Gekko from the github page above we CANNOT 
  // garantuee that your email address & password are safe!
  password: ''
}

module.exports = config;