// @desc Get Goals
// @route GET /api/goals
// @access Private

const getGoals = async (req, res) => {
    res.status(200).json({ message: 'Get goals' })
}

// @desc Create Goals
// @route POST /api/goals
// @access Private

const setGoals = async (req, res) => {
    res.status(200).json({ message: 'Set goals' })
}

// @desc Update Goals
// @route PUT /api/goals/:id
// @access Private

const updateGoals = async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
}

// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access Private

const deleteGoals = async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
} 