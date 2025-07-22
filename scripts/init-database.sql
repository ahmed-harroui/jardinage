-- Création de la base de données SQLite pour le site de jardinage

-- Table pour stocker les demandes de contact
CREATE TABLE IF NOT EXISTS contact_requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    service TEXT,
    urgency TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'nouveau',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Table pour les services disponibles
CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price_range TEXT,
    duration TEXT,
    active BOOLEAN DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Table pour les clients
CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    address TEXT,
    notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insertion des services par défaut
INSERT OR IGNORE INTO services (name, description, price_range, duration) VALUES
('Taille et élagage', 'Taille professionnelle de vos arbres, arbustes et haies', '50-150€', '2-4h'),
('Plantation', 'Conseil et plantation de végétaux adaptés', '80-200€', '3-6h'),
('Entretien pelouse', 'Tonte, scarification, fertilisation', '40-100€', '1-3h'),
('Arrosage automatique', 'Installation de systèmes d''arrosage', '200-800€', '1-2 jours'),
('Traitement bio', 'Protection naturelle contre parasites', '60-120€', '2-3h'),
('Création massifs', 'Conception et réalisation de massifs floraux', '100-300€', '4-8h');

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_contact_requests_status ON contact_requests(status);
CREATE INDEX IF NOT EXISTS idx_contact_requests_created_at ON contact_requests(created_at);
CREATE INDEX IF NOT EXISTS idx_clients_email ON clients(email);
