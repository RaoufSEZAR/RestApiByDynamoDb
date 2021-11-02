const {
	getCharacters,
	getCharacterById,
	addOrUpdateCharacter,
	deleteCharacterById,
} = require("../dynamo");

exports.getCharacters = async (req, res) => {
	try {
		const Characters = await getCharacters();
		res.status(200).json(Characters);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};
exports.getCharacterById = async (req, res) => {
	const characterId = req.params.id;
	try {
		const Character = await getCharacterById(characterId);
		res.status(200).json(Character);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};

exports.createCharacter = async (req, res) => {
	const character = req.body;
	try {
		const newCharacter = await addOrUpdateCharacter(character);
		res.status(201).json(newCharacter);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};

exports.updatedCharacter = async (req, res) => {
	const character = req.body;
	const { id } = req.params;
	character.id = id;
	try {
		const updatedCharacter = await addOrUpdateCharacter(character);
		res.status(201).json(updatedCharacter);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};

exports.deleteCharacterById = async (req, res) => {
	const { id } = req.params;
	try {
		const updatedCharacter = await deleteCharacterById(id);
		res.status(200).json(updatedCharacter);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};
