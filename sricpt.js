// Fetch Live Marketcap Data from an API
async function fetchMarketcap() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        const marketcap = data.bitcoin.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        document.getElementById('marketcap').textContent = `Bitcoin Marketcap: ${marketcap}`;
    } catch (error) {
        console.error('Fehler beim Abrufen des Marketcaps:', error);
        document.getElementById('marketcap').textContent = 'Daten nicht verfügbar';
    }
}

// Call the function when the page loads
window.addEventListener('load', () => {
    fetchMarketcap();
});