// Custom Footer Component
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-gray-800 text-white mt-auto">
                <div class="container mx-auto px-4 py-8">
                    <div class="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 class="text-lg font-bold mb-4">DoctorAnywhere</h3>
                            <p class="text-gray-400 text-sm">Making healthcare simple, accessible, and convenient for everyone.</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-4">Quick Links</h3>
                            <ul class="space-y-2 text-sm">
                                <li><a href="index.html" class="text-gray-400 hover:text-white transition">Home</a></li>
                                <li><a href="about.html" class="text-gray-400 hover:text-white transition">About Us</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white transition">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-4">Contact</h3>
                            <ul class="space-y-2 text-sm text-gray-400">
                                <li>support@doctoranywhere.com</li>
                                <li>+65 XXXX XXXX</li>
                            </ul>
                        </div>
                    </div>
                    <div class="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
                        <p>&copy; ${new Date().getFullYear()} DoctorAnywhere. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
