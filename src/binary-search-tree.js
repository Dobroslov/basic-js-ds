const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
// class BinarySearchTree {

//   root() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   add(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   has(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   find(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   remove(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   min() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   max() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
  setParent(node) {
    this.parent = node;
  }
  getParent() {
    return this.parent;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const node = new Node(data);

    if (!this.has(data)) {
      if (this.rootNode === null) {
        this.rootNode = node;
      } else {
        this.insertNode(this.rootNode, node);
      }
    }
  }

  insertNode(node, newNode) {
    if (newNode.data !== node.data) {
      if (newNode.data < node.data) {
        if (!node.left) {
          node.left = newNode;
          newNode.setParent(node);
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
          newNode.setParent(node);
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    return this.searchNode(this.rootNode, data);
  }

  searchNode(node, data) {
    if (!node) {
      return null;
    } else if (data < node.data) {
      return this.searchNode(node.left, data);
    } else if (data > node.data) {
      return this.searchNode(node.right, data);
    } else {
      return node;
    }
  }

  remove(data) {
    if (this.has(data)) {
      let node = this.find(data);
      let parent = node.getParent();

      if (parent) {
        if (parent.data > node.data) {
          if (node.right) {
            parent.left = node.right;
          } else if (node.left) {
            parent.left = node.left;
          } else {
            parent.left = null;
          }
        } else {
          if (node.left) {
            parent.right = node.left;
          } else if (node.right) {
            parent.right = node.right;
          } else {
            parent.right = null;
          }
        }
      } else {
        this.rootNode = null;
      }
    }
  }

  getMinValue(node) {
    if (node.left) {
      return this.getMinValue(node.left);
    } else {
      return node.data;
    }
  }
  getMaxValue(node) {
    if (node.right) {
      return this.getMaxValue(node.right);
    } else {
      return node.data;
    }
  }
  min() {
    if (this.rootNode) {
      return this.getMinValue(this.rootNode);
    } else {
      return null;
    }
  }
  max() {
    if (this.rootNode) {
      return this.getMaxValue(this.rootNode);
    } else {
      return null;
    }
  }
}

module.exports = {
  BinarySearchTree,
};
