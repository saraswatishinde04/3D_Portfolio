import fs from 'fs';

const files = ['Projects.jsx', 'Footer.jsx', 'Contact.jsx'];

const replacements = {
    'Projects.jsx': [
        ['                  </div>\n                  <h3', '                  </div>\n                </div>\n                <h3']
    ],
    'Footer.jsx': [
        ['        </div>\n    </footer>', '        </div>\n      </div>\n    </footer>']
    ],
    'Contact.jsx': [
        ['              </div>\n          </motion.div>', '              </div>\n            </div>\n          </motion.div>']
    ]
};

for (const file of files) {
    let content = fs.readFileSync(`src/components/${file}`, 'utf8');
    const original = content;
    for (const [oldStr, newStr] of (replacements[file] || [])) {
        content = content.replace(oldStr, newStr);
    }
    if (content !== original) {
        fs.writeFileSync(`src/components/${file}`, content);
        console.log(`Fixed ${file}`);
    } else {
        console.log(`No changes needed for ${file}`);
    }
}
console.log('DONE');
